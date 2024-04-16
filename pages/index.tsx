import Intro from "../components/index/intro";
import About from "../components/index/about";
import Experience from "../components/index/experience";
import Work from "../components/index/work";
import Contact from "../components/index/contact";
import Head from "next/head";
import Footer from "../components/shared/footer";
import AnimationSequence from "../components/helpers/animationSequence";

function HomePage({ darkMode, showedArea, scrollY }) {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Alejandro Mares | Web Developer</title>
        <meta
          name="description"
          content="Alejandro Mares Sanchez is a Full Stack Web Developer specializaed in frontend having years of experience building web projects with js, angular and react."
        />
        <meta property="og:url" content="https://www.alxmares.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alejandro Mares | Web Developer" />
        <meta
          property="og:description"
          content="Alejandro Mares Sanchez is a Full Stack Web Developer specializaed in frontend  having years of experience building web projects with js, angular and react."
        />
        <meta
          property="og:image"
          content="https://www.alxmares.com/index.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.alxmares.com/index.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Inicio portafolio" />
        <meta
          property="og:site_name"
          content="Alejandro Mares | Web Developer"
        />

        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alejandro Mares | Web Developer" />
        <meta property="twitter:domain" content="alxmares.com" key="domain" />
        <meta
          property="twitter:url"
          content="https://www.alxmares.com/"
          key="url"
        />
        <meta
          name="twitter:description"
          content="Alejandro Mares Sanchez is a Full Stack Web Developer specializaed in frontend  having years of experience building web projects with js, angular and react."
        />
        <meta
          name="twitter:image"
          content="https://www.alxmares.com/index.jpg"
        />

        <meta
          name="keywords"
          content="alejandro mares, alxmares, alx mares, web development, full stack, remote developer, angular developer, react developer"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Intro component */}
      <div className="px-6 h-screen w-screen md:pb-20 flex items-center relative">
        <div className="max-w-md sm:max-w-2xl xl:max-w-3xl m-auto w-full pb-20 relative z-10">
          <Intro darkMode={darkMode} />
        </div>

        <div className="lines flex justify-around z-0">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* About section */}
      <div className="px-6 mb-20 sm:mb-32 w-screen relative">
        <div className="bg-gradient bg-gradient-1"></div>
        <div className="m-auto max-w-md sm:max-w-2xl xl:max-w-3xl">
          <About darkMode={darkMode} showedArea={showedArea} />
        </div>
      </div>

      {/* Experience section */}
      <div className="px-6 mb-10 sm:mb-32 w-screen relative">
        <div className="bg-gradient bg-gradient-2 "></div>
        <div className="m-auto max-w-md sm:max-w-2xl xl:max-w-3xl">
          <Experience darkMode={darkMode} showedArea={showedArea} />
        </div>
      </div>

      {/* Work section */}
      <div className="px-6 mb-10 sm:mb-32 w-screen relative">
        <div className="bg-gradient bg-gradient-3 "></div>
        <div className="m-auto max-w-md sm:max-w-2xl xl:max-w-3xl">
          <Work darkMode={darkMode} showedArea={showedArea} />
        </div>
      </div>

      {/* Contact section */}
      <div className="px-6 mb-40 sm:mb-32 w-screen relative">
        <div className="bg-gradient bg-gradient-4 "></div>
        <div className="m-auto max-w-md sm:max-w-2xl xl:max-w-3xl">
          <Contact darkMode={darkMode} showedArea={showedArea} />
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default HomePage;
