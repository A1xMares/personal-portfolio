import { useState } from "react";
import AnimationSequence from "../helpers/animationSequence";
import Card from "../shared/card";
import Subtitle from "../shared/subtitle";

const projects = [
  {
    title: "Integreat Website",
    date: "Freelance project worked in 2021",
    description:
      "Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",
    tags: ["Three.js", "SEO", "HTML", "CSS", "JS"],
    gallery: [
      "/img/integreat/erpsolutions-min.webp",
      "/img/integreat/whyus-min.webp",
      "/img/integreat/footer-min.webp",
    ],
    githubLink: "",
    url: "https://integreat.com/en/home",
  },
  {
    title: "Adroit ERP Web App",
    date: "While I was working for Adroit in 2020",
    description:
      "ERP to manage 6 departments of the company. Focused in logistics. Extensive qty of cruds and visualization modules",
    tags: ["Angular 9", "TS", "SCSS", "REST APIs"],
    gallery: [
      "/img/adroit-erp/erp3-min.webp",
      "/img/adroit-erp/erp1-min.webp",
      "/img/adroit-erp/erp2-min.webp",
      "/img/adroit-erp/erp4-min.webp",
    ],
    githubLink: "",
    url: "",
  },
  {
    title: "Unisun CRM Web App",
    date: "Freelance project worked in 2020",
    description:
      "CRM for an online school. Focused in manage the student payment dues, prepared to manage many campuses.",
    tags: ["Angular 9", "TS", "SCSS", "REST APIs"],
    gallery: [
      "/img/unisun/unisun2-min.webp",
      "/img/unisun/unisun1-min.webp",
      "/img/unisun/unisun3-min.webp",
    ],
    githubLink: "",
    url: "",
  },
  {
    title: "Grid Landing",
    date: "Freelance project worked in 2020",
    description:
      "Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",
    tags: ["HTML", "CSS", "JS"],
    gallery: [
      "/img/grid/grid1-min.webp",
      "/img/grid/grid2-min.webp",
      "/img/grid/grid3-min.webp",
    ],
    githubLink: "",
    url: "https://www.aleate.com/",
  },
  {
    title: "Aleate Website",
    date: "While I was working for Aleate in 2019",
    description:
      "Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",
    tags: ["Three.js", "HTML", "CSS", "JS"],
    gallery: [
      "/img/aleate/aleate1-min.webp",
      "/img/aleate/aleate2-min.webp",
      "/img/aleate/aleate3-min.webp",
    ],
    githubLink: "",
    url: "https://www.aleate.com/",
  },
  {
    title: "Adroit CRM",
    date: "While I was working for Aleate in 2019",
    description:
      "CRM to manage clients and its products, leads, deals (Commodity trading). Many roles, cruds, charts and maps.",
    tags: ["Angular 7", "TS", "SCSS", "REST APIs"],
    gallery: [
      "/img/adroit-crm/crm1-min.webp",
      "/img/adroit-crm/crm2-min.webp",
      "/img/adroit-crm/crm3-min.webp",
    ],
    githubLink: "",
    url: "",
  },
  {
    title: "Megadulces ERP",
    date: "While I was working for Aleate in 2018",
    description:
      "ERP to manage 7 departments. Focused in storage and payments. Extensive qty of cruds. Supply routes designer.",
    tags: ["Angular 6", "TS", "CSS", "REST APIs"],
    gallery: [
      "/img/megadulces/megadulces1-min.webp",
      "/img/megadulces/megadulces2-min.webp",
    ],
    githubLink: "",
    url: "",
  },
];

const Work = ({ darkMode, showedArea }) => {
  return (
    <section id="work" className="pt-28">
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"03."}
            text={"Work I've done"}
          />
        </AnimationSequence>
      </div>

      <div className="px-0">
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 pt-4">
          {projects.map((project, index) => {
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
