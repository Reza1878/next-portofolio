import React from "react";
import ProjectItem from "./ProjectItem";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

function Projects() {
  const items = [
    {
      id: 1,
      name: "Hasten",
      description: "Eksplorasi landing page.",
      image: "/img/hasten.png",
    },
    {
      id: 2,
      name: "Resource",
      description: "Eksplorasi resource page.",
      image: "/img/resource.png",
    },
    {
      id: 3,
      name: "Hasten",
      description: "Eksplorasi landing page.",
      image: "/img/resource.png",
    },
    {
      id: 4,
      name: "Resource",
      description: "Eksplorasi resource page.",
      image: "/img/hasten.png",
    },
  ];
  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionSubTitle>
          Beberapa project yang telah saya buat.
        </SectionSubTitle>

        <div className="flex -mx-4 mt-20 flex-wrap">
          {items.map((item) => (
            <div className="md:w-6/12 w-full px-4 pb-8" key={item.id}>
              <ProjectItem
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
