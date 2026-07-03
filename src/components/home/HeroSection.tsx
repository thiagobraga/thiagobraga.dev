import React, { useState, useEffect, useRef, useCallback } from 'react';
// TEMP: gsap/ScrollTrigger disabled for perf testing
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

interface Group {
  key: string;
  color: string;
  items: string[];
}

const GROUPS: Group[] = [
  {
    key: 'musician',
    color: 'text-nord7',
    items: [
      'Musician',
      'Creative Musician',
      'Guitarist',
      'Music Composer'
    ],
  },
  {
    key: 'developer',
    color: 'text-nord11',
    items: [
      'Developer',
      'Creative Developer',
      'PHP Developer',
      'PHP/JS Developer',
      'PHP/JS/CSS Developer',
      'Web Developer',
      'Frontend Developer',
      'Backend Developer',
      'Mobile Developer',
    ],
  },
  {
    key: 'petLover',
    color: 'text-nord13',
    items: [
      'Pet Parent',
      'Dog Lover',
      'Dog & Cat Lover',
      'Pet Lover',
    ],
  },
  {
    key: 'cybersecurity',
    color: 'text-nord12',
    items: [
      'CyberSecurity Student',
      'CyberSecurity Enthusiast'
    ],
  },
];

const TYPING_SPEED = 85;
const ERASING_SPEED = 75;

function getTypingDelay() {
  const rand = Math.random();
  // 20% chance of pause after letter
  if (rand < 0.2) return TYPING_SPEED + 80 + Math.random() * 100;
  // 5% chance of longer pause
  if (rand < 0.25) return TYPING_SPEED + 200 + Math.random() * 150;
  // Normal typing with slight variance
  return TYPING_SPEED + (Math.random() - 0.5) * 30;
}

/** Finds the common prefix/suffix so we only animate the diff */
function findDiff(oldText: string, newText: string) {
  let prefixLen = 0;
  const minLen = Math.min(oldText.length, newText.length);
  while (prefixLen < minLen && oldText[prefixLen] === newText[prefixLen]) prefixLen++;

  let suffixLen = 0;
  while (
    suffixLen < oldText.length - prefixLen &&
    suffixLen < newText.length - prefixLen &&
    oldText[oldText.length - 1 - suffixLen] === newText[newText.length - 1 - suffixLen]
  ) suffixLen++;

  // Discard trivial suffix matches (< 3 chars) so words like
  // Lover/Father ("er") and Student/Enthusiast ("t") erase fully
  if (suffixLen < 3) suffixLen = 0;

  const oldEnd = oldText.length - suffixLen;
  const newEnd = newText.length - suffixLen;
  return {
    prefix: oldText.slice(0, prefixLen),
    oldMiddle: oldText.slice(prefixLen, oldEnd),
    newMiddle: newText.slice(prefixLen, newEnd),
    suffix: suffixLen > 0 ? oldText.slice(oldEnd) : '',
  };
}

function randomPause() {
  return 4000 + Math.random() * 2000;
}

const HeroSection: React.FC = () => {
  const [activeItems, setActiveItems] = useState<string[]>(
    GROUPS.map((g) => g.items[0])
  );
  const [displayTexts, setDisplayTexts] = useState<string[]>(
    GROUPS.map((g) => g.items[0])
  );
  const [animatingIdx, setAnimatingIdx] = useState<number | null>(null);
  const [cursorCharIdx, setCursorCharIdx] = useState<number | null>(null);
  const [showCursor, setShowCursor] = useState(true);
  const isAnimating = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const heroBgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // TEMP: parallax disabled for perf testing
  // useEffect(() => {
  //   if (!heroBgRef.current || !sectionRef.current) return;
  //   let tween: gsap.core.Tween | undefined;
  //   // Deferred one frame so ScrollTrigger's initial layout measurement
  //   // (getBoundingClientRect) happens after first paint, not during it.
  //   const raf = requestAnimationFrame(() => {
  //     tween = gsap.fromTo(
  //       heroBgRef.current,
  //       { y: 0 },
  //       {
  //         y: -200,
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: 'top top',
  //           end: 'bottom top',
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });
  //   return () => {
  //     cancelAnimationFrame(raf);
  //     tween?.scrollTrigger?.kill();
  //     tween?.kill();
  //   };
  // }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const animateTransition = useCallback(
    (changedIdx: number, newText: string) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const oldText = activeItems[changedIdx];
      const { prefix, oldMiddle, newMiddle, suffix } = findDiff(oldText, newText);

      setAnimatingIdx(changedIdx);

      // Phase 1: erase only the differing middle part
      let erasePos = oldMiddle.length;
      const eraseInterval = setInterval(() => {
        erasePos--;
        const text = prefix + oldMiddle.slice(0, erasePos) + suffix;
        setDisplayTexts((curr) => {
          const copy = [...curr];
          copy[changedIdx] = text;
          return copy;
        });
        setCursorCharIdx(prefix.length + erasePos);

        if (erasePos <= 0) {
          clearInterval(eraseInterval);
          setTimeout(() => {
            // Phase 2: type only the new differing part
            let typePos = 0;
            const typeNextChar = () => {
              if (typePos >= newMiddle.length) {
                setAnimatingIdx(null);
                setCursorCharIdx(null);
                setActiveItems((curr) => {
                  const copy = [...curr];
                  copy[changedIdx] = newText;
                  return copy;
                });
                isAnimating.current = false;
                return;
              }
              typePos++;
              const text = prefix + newMiddle.slice(0, typePos) + suffix;
              setDisplayTexts((curr) => {
                const copy = [...curr];
                copy[changedIdx] = text;
                return copy;
              });
              setCursorCharIdx(prefix.length + typePos);
              setTimeout(typeNextChar, getTypingDelay());
            };
            typeNextChar();
          }, 200);
        }
      }, ERASING_SPEED);
    },
    [activeItems]
  );

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      // 1. Choose a random group to change
      const groupIdx = Math.floor(Math.random() * GROUPS.length);
      const group = GROUPS[groupIdx];

      // 2. Choose a random item from that group, different from current
      const currentText = activeItems[groupIdx];
      const otherItems = group.items.filter((item) => item !== currentText);
      const newText = otherItems.length > 0
        ? otherItems[Math.floor(Math.random() * otherItems.length)]
        : currentText;

      if (newText !== currentText) {
        animateTransition(groupIdx, newText);
      }
    }, randomPause());
    return () => clearTimeout(timeoutRef.current);
  }, [activeItems, animateTransition]);

  const renderLabel = (text: string, i: number) => {
    const isAnimated = animatingIdx === i && cursorCharIdx !== null;
    if (!isAnimated) return <>{text}</>;

    const before = text.slice(0, cursorCharIdx);
    const after = text.slice(cursorCharIdx);
    return (
      <>
        {before}
        <span
          className="inline-block w-[2px] h-[1em] ml-[1px] align-text-bottom"
          style={{
            backgroundColor: 'currentColor',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
          }}
        />
        {after}
      </>
    );
  };

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-nord0">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          ref={heroBgRef}
          className="absolute blur-sm -top-[15%] -bottom-[15%] inset-x-0 bg-no-repeat bg-cover bg-center grayscale contrast-125 brightness-50"
          style={{ backgroundImage: "url('/images/backgrounds/misty-forest.webp')" }}
        />
        <div
          className="absolute top-[35%] inset-0"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(46, 52, 64, 1))',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Name */}
        <h1
          className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-4"
          style={{
            backgroundImage: 'linear-gradient(180deg, #ffffffee, #ffffff66)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.3,
            textShadow: '1px 1px 0 rgb(0 0 0 / 7%)',
          }}
        >
          <span className="font-light">Thiago</span>{' '}
          <span className="font-semibold">Braga</span>
        </h1>

        {/* Subtitle — typewriter animation */}
        <p className="font-label text-nord4 text-base md:text-lg mb-12 leading-relaxed">
          {displayTexts.map((text, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-nord3 mx-3">·</span>}
              <span className={GROUPS[i].color}>
                {renderLabel(text, i)}
              </span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
