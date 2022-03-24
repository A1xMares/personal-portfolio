import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import { useState } from "react";

// Navbar component 'props' interface
interface Props {
  children: any;
  darkMode: boolean;
  toggleDarkMode?: any;
  scrollY: number;
  windowHeight: number;
}

const schemaWebsite = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Alejandro Mares | Web Developer",
  url: "https://www.alxmares.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const schemaPerson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Alejandro Mares",
  url: "https://www.alxmares.com/",
  image: "https://www.alxmares.com/img/profile-min.webp",
  sameAs: [
    "https://twitter.com/Alxmres/",
    "https://www.linkedin.com/in/alejandro-mares/",
    "https://github.com/A1xMares",
  ],
  jobTitle: "Full Stack Web Developer",
};

const Layout = ({
  children,
  darkMode,
  toggleDarkMode,
  scrollY,
  windowHeight,
}: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = (value) => {
    setMobileMenu(value);
    const body = document.querySelector("body");
    if (value) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  return (
    <>
      <div
        className={`transition-colors duration-300 ${darkMode ? "dark" : ""} `}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          scrollY={scrollY}
          windowHeight={windowHeight}
          mobileMenu={mobileMenu}
          setMobileMenu={handleMenu}
        ></Navbar>
        <main className="overflow-hidden">{children}</main>
        <Footer></Footer>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
      />
    </>
  );
};

export default Layout;
