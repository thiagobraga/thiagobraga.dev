import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLenis } from 'lenis/react';


interface LabelItem {
  text: string;
  color: string;
}

type Variation = LabelItem[];

// Each consecutive pair differs by exactly ONE label.
// Developer cycles through: Developer → Creative → PHP → PHP/JS → PHP/JS/CSS →
// Web → Frontend → Backend → Mobile → Developer Developer → Developer
const VARIATIONS: Variation[] = [
  // 1 — starting state
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 2 — 1st: Creative Musician → Musician
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 3 — 2nd: Developer → Creative Developer
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Creative Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 4 — 2nd: Creative Developer → PHP Developer
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'PHP Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 5 — 3rd: Dog Lover → Pet Lover
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'PHP Developer', color: 'text-nord15' },
    { text: 'Pet Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 6 — 2nd: PHP → PHP/JS
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'PHP/JS Developer', color: 'text-nord15' },
    { text: 'Pet Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // 7 — 4th: Student → Enthusiast
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'PHP/JS Developer', color: 'text-nord15' },
    { text: 'Pet Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 8 — 2nd: PHP/JS → PHP/JS/CSS
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'PHP/JS/CSS Developer', color: 'text-nord15' },
    { text: 'Pet Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 9 — 2nd: PHP/JS/CSS → Web
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Web Developer', color: 'text-nord15' },
    { text: 'Pet Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 10 — 3rd: Pet Lover → Pet Father
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Web Developer', color: 'text-nord15' },
    { text: 'Pet Father', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 11 — 2nd: Web → Frontend
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Frontend Developer', color: 'text-nord15' },
    { text: 'Pet Father', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 12 — 2nd: Frontend → Backend (smart diff: erases "Front", types "Back")
  [
    { text: 'Musician', color: 'text-nord7' },
    { text: 'Backend Developer', color: 'text-nord15' },
    { text: 'Pet Father', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 13 — 1st: Musician → Creative Musician
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Backend Developer', color: 'text-nord15' },
    { text: 'Pet Father', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 14 — 2nd: Backend → Mobile
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Mobile Developer', color: 'text-nord15' },
    { text: 'Pet Father', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 15 — 3rd: Pet Father → Dog Lover
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Mobile Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 16 — 2nd: Mobile → Developer Developer
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Developer Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Enthusiast', color: 'text-nord3' },
  ],
  // 17 — 4th: Enthusiast → Student
  [
    { text: 'Creative Musician', color: 'text-nord7' },
    { text: 'Developer Developer', color: 'text-nord15' },
    { text: 'Dog Lover', color: 'text-nord13' },
    { text: 'CyberSecurity Student', color: 'text-nord3' },
  ],
  // → loops back to [0]: 2nd changes Developer Developer → Developer
];

const TYPING_SPEED = 65;
const ERASING_SPEED = 45;

function findChangedLabel(prev: Variation, next: Variation) {
  for (let i = 0; i < prev.length; i++) {
    if (prev[i].text !== next[i].text) return i;
  }
  return null;
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
  return 3000 + Math.random() * 2000;
}

const HeroSection: React.FC = () => {
  const [variationIndex, setVariationIndex] = useState(0);
  const [displayTexts, setDisplayTexts] = useState<string[]>(
    VARIATIONS[0].map((l) => l.text)
  );
  const [animatingIdx, setAnimatingIdx] = useState<number | null>(null);
  const [cursorCharIdx, setCursorCharIdx] = useState<number | null>(null);
  const [showCursor, setShowCursor] = useState(true);
  const isAnimating = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const bgRef = useRef<HTMLDivElement>(null);

  useLenis(({ scroll }) => {
    if (bgRef.current) {
      bgRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
    }
  });

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const animateTransition = useCallback(
    (fromIdx: number, nextVariationIdx: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const prev = VARIATIONS[fromIdx];
      const next = VARIATIONS[nextVariationIdx];
      const changedIdx = findChangedLabel(prev, next);

      if (changedIdx === null) {
        isAnimating.current = false;
        setVariationIndex(nextVariationIdx);
        return;
      }

      const oldText = prev[changedIdx].text;
      const newText = next[changedIdx].text;
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
            const typeInterval = setInterval(() => {
              typePos++;
              const text = prefix + newMiddle.slice(0, typePos) + suffix;
              setDisplayTexts((curr) => {
                const copy = [...curr];
                copy[changedIdx] = text;
                return copy;
              });
              setCursorCharIdx(prefix.length + typePos);

              if (typePos >= newMiddle.length) {
                clearInterval(typeInterval);
                setAnimatingIdx(null);
                setCursorCharIdx(null);
                setVariationIndex(nextVariationIdx);
                isAnimating.current = false;
              }
            }, TYPING_SPEED);
          }, 200);
        }
      }, ERASING_SPEED);
    },
    []
  );

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      const nextIdx = (variationIndex + 1) % VARIATIONS.length;
      animateTransition(variationIndex, nextIdx);
    }, randomPause());
    return () => clearTimeout(timeoutRef.current);
  }, [variationIndex, animateTransition]);

  const currentVariation = VARIATIONS[variationIndex];

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-nord0">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          ref={bgRef}
          className="absolute -top-[15%] -bottom-[15%] inset-x-0 bg-no-repeat bg-cover bg-center grayscale contrast-125 brightness-50"
          style={{ backgroundImage: "url('/images/misty-forest.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nord0/40 via-nord0/20 to-nord0" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl animate-fade-up">
        {/* Avatar */}
        {/* <div className="mb-8 p-0.5 rounded-full bg-nord4/20 backdrop-blur-sm">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-nord0/50 overflow-hidden">
            <img
              src="/images/avatar.png"
              alt="Thiago Braga"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div> */}

        {/* Name */}
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-nord6">
          <span className="opacity-70 font-light">Thiago</span>{' '}
          <span className="font-semibold">Braga</span>
        </h1>

        {/* Subtitle — typewriter animation */}
        <p className="font-label text-nord4 text-base md:text-lg mb-12 leading-relaxed">
          {displayTexts.map((text, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-nord3 mx-3">·</span>}
              <span className={currentVariation[i].color}>
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
