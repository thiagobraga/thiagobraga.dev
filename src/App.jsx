import React, { useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Section/Home';
import Skills from './components/Section/Skills';
import WhoAmI from './components/Section/WhoAmI';
import './styles/components/scrollbar.sass';
import './styles/components/sections.sass';
import './styles/typography.sass';
import './styles/layout.sass';

export default function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [limitY, setLimitY] = useState(false);

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector('[data-scrollbar]'), { damping: 0.025 });

    const onScroll = (status) => {
      setOffsetY(status.offset.y);
      setLimitY(status.limit.y);
    };

    scrollbar.addListener(onScroll);
    return () => scrollbar.removeListener(onScroll);
  }, [offsetY, limitY]);

  // Dynamic opacity of the navigation bar
  const navbarOpacity = offsetY > 150 ? offsetY * 0.15 * 0.01 : 0.15;
  const navbarBackground = `rgba(12, 13, 17, ${Math.min(navbarOpacity, 1)})`;

  // Parallax effect applied to background images
  const headerParallax = -(offsetY * 0.7);
  const footerParallax = (limitY - offsetY - 50) * 0.7;

  console.log(offsetY, headerParallax);

  // Define styles to use in components
  const styles = {
    headerParallax: { backgroundPositionY: headerParallax },
    footerParallax: { backgroundPositionY: footerParallax },
    navbar: { backgroundColor: navbarBackground },
  };

  return (
    <>
      <Navbar style={styles.navbar} />

      <main data-scrollbar>
        <Home style={styles.headerParallax} />
        <WhoAmI />
        <Skills />

        <Footer style={styles.footerParallax} />
      </main>
    </>
  );
}
