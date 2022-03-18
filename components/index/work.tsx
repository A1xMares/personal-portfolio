import AnimationSequence from "../helpers/animationSequence";
import Subtitle from "../shared/subtitle";

const Work = ({ darkMode, showedArea }) => {
  return (
    <section id="experience" className="pt-28 -mt-28">
      <div className="flex items-center mb-6 pr-2">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"03."}
            text={"Some of my work"}
          />
        </AnimationSequence>
      </div>

      <div className="pl-8">
        <div className="relative h-96"></div>
      </div>
    </section>
  );
};

export default Work;
