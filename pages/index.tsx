import Intro from "../components/index/intro";
import About from "../components/index/about";
import Experience from "../components/index/experience";
import Work from "../components/index/work";
import Contact from "../components/index/contact";
import Head from 'next/head'

function HomePage({ darkMode, showedArea, scrollY }) {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>AlxMares | Web Developer</title>
        <meta name="description" content="Alejandro Mares is a software developer specialized in Full Stack Web Development, having 3.5+ years of experience working in large projects."/>

        <meta property="og:url" content="https://www.alxmares.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="AlxMares | Web Developer"/>
        <meta property="og:description" content="Alejandro Mares is a software developer specialized in Full Stack Web Development, having 3.5+ years of experience working in large projects."/>
        <meta property="og:image" content="https://www.alxmares.com/index.jpg"/>
        <meta property="og:image:secure_url" content="https://www.alxmares.com/index.jpg"/>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Inicio portafolio"/>
        <meta property="og:site_name" content="Alejandro Mares | Web Developer"/>
        
        <meta property="og:locale" content="en_US"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlxMares | Web Developer"/>
        <meta property="twitter:domain" content="alxmares.com" key="domain"/>
        <meta property="twitter:url" content="https://www.alxmares.com/" key="url"/>
        <meta name="twitter:description" content="Alejandro Mares is a doftware developer specialized in Full Stack Web Development, having 3.5+ years of experience working in large projects."/>
        <meta name="twitter:image" content="https://www.alxmares.com/index.jpg"/>

        <meta name="keywords" content="alejandro mares, alxmares, alx mares, web development, full stack, remote developer, angular developer, react developer" ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className="px-6 h-screen pb-20 flex items-center w-100 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl">
        {/* Intro component */}
        <Intro darkMode={darkMode} />
      </div>
      {/* About section */}
      <div className="px-6 mb-20 sm:mb-48 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl">
        <About darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Experience section */}
      <div className="px-6 mb-10 sm:mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl">
        <Experience darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Work section */}
      <div className="px-6 mb-10 sm:mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl">
        <Work darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Contact section */}
      <div className="px-6 mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl">
        <Contact darkMode={darkMode} showedArea={showedArea} />
      </div>
    </>
  );
}

export default HomePage;
