import "../styles/global.css";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [showedArea, setShowedArea] = useState([0, 0]);

  // Set event listeners and get default darkmode
  useEffect(() => {
    // Set scroll listener
    handleScroll({});
    // Set resize listener
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => calculateArea(scrollY, windowHeight), [scrollY, windowHeight])

  // Track scroll from top
  const handleScroll = (e) => {
    setScrollY(e);
  };

  // Track resize event
  const handleResize = () => {
    const tempHeight =
      window.innerHeight || document.documentElement.clientHeight;
    setWindowHeight(tempHeight);
  };

  // Function to calculate displayed area
  const calculateArea = (scrollY, height) => {
    setShowedArea([scrollY, height]);
  };

  // Change user's darkmode preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      scrollY={scrollY}
      windowHeight={windowHeight}
      handleScroll={handleScroll}
    >
      <Component
        {...pageProps}
        darkMode={darkMode}
        windowHeight={windowHeight}
        showedArea={showedArea}
      />
    </Layout>
  );
}
