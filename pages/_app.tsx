import "../styles/global.css";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [showedArea, setShowedArea] = useState([0, 0]);

  // Set event listeners and get default darkmode
  useEffect(() => {
    // Set scroll listener
    handleScroll({});
    window.addEventListener("scroll", handleScroll);
    // Set resize listener
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(
    () => calculateArea(scrollY, windowHeight),
    [scrollY, windowHeight]
  );

  // Track scroll from top
  const handleScroll = (e) => {
    setScrollY(window.scrollY);
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
    const body = document.querySelector("body");
    body.classList.remove(!darkMode ? "bg-white" : "dark-back");
    body.classList.add(!darkMode ? "dark-back" : "bg-white");
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script 
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-RT25P3F7F5"
      ></Script>
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RT25P3F7F5');
        `}
      </Script>
      <Layout
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollY={scrollY}
        windowHeight={windowHeight}
      >
        <Component
          {...pageProps}
          darkMode={darkMode}
          windowHeight={windowHeight}
          showedArea={showedArea}
        />
      </Layout>
    </>
  );
}
