import { useState } from "react";
import { projectsData } from "../../consts/projectsData";
import AnimationSequence from "../helpers/animationSequence";
import Card from "../shared/card";
import Subtitle from "../shared/subtitle";

const Work = ({ darkMode, showedArea }) => {
  return (
    <section id="work" className="pt-28">
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"03."}
            text={"Latest projects"}
          />
        </AnimationSequence>
      </div>

      <div className="px-0">
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 pt-4">
          {projectsData.map((project, index) => {
            return (
              <AnimationSequence showedArea={showedArea} key={index}>
                <Card darkMode={darkMode} project={project}></Card>
              </AnimationSequence>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
