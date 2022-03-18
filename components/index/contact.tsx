import AnimationSequence from "../helpers/animationSequence";
import Subtitle from "../shared/subtitle";

const Contact = ({ darkMode, showedArea }) => {
  return (
    <section id="experience" className="pt-28 -mt-28">
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"04."}
            text={"Contact me!"}
          />
        </AnimationSequence>
      </div>

      <div className="pl-8">
        <div className="relative h-96"></div>
      </div>
    </section>
  );
};

export default Contact;
