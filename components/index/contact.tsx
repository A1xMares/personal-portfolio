import AnimationSequence from "../helpers/animationSequence";
import BtnPrimary from "../shared/btn-primary";
import Subtitle from "../shared/subtitle";

const Contact = ({ darkMode, showedArea }) => {
  return (
    <section id="contact" className="pt-28">
      {/* Subtitle container */}
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"04."}
            text={"Contact me!"}
          />
        </AnimationSequence>
      </div>
      {/* Content container */}
      <div className="">
        <AnimationSequence showedArea={showedArea}>
          <p className="">
            If you think I can help you or your organization, feel free to send
            me an email.  I will be answering soon.
          </p>
        </AnimationSequence>
        <div className="w-100 flex justify-center mt-9 mb-9">
          <AnimationSequence showedArea={showedArea}>
            <a
              href="mailto:hello@alxmares.com?subject=Hi, I saw your website and ..."
              target="_blank"
              rel="noreferrer"
              aria-label="Email me"
            >
              <BtnPrimary darkMode={darkMode} className="w-36">
                Email Me
              </BtnPrimary>
            </a>
          </AnimationSequence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
