/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

function Skills() {
  const skillItems = [
    {
      id: 1,
      name: "Javascript",
      level: "Lanjutan",
      image: "/img/javascript.svg",
    },
    { id: 2, name: "React JS", level: "Menengah", image: "/img/react.svg" },
    {
      id: 3,
      name: "Node.js",
      level: "Lanjutan",
      image: "/img/nodejs-icon.svg",
    },
    {
      id: 6,
      name: "Node.js",
      level: "Lanjutan",
      image: "/img/nodejs-icon.svg",
    },

    {
      id: 4,
      name: "Javascript",
      level: "Lanjutan",
      image: "/img/javascript.svg",
    },
    { id: 5, name: "React JS", level: "Menengah", image: "/img/react.svg" },

    { id: 8, name: "React JS", level: "Menengah", image: "/img/react.svg" },
    {
      id: 9,
      name: "Node.js",
      level: "Lanjutan",
      image: "/img/nodejs-icon.svg",
    },
    {
      id: 7,
      name: "Javascript",
      level: "Lanjutan",
      image: "/img/javascript.svg",
    },
  ];
  return (
    <section id="skills" className="py-28 bg-primary-gray">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionSubTitle>Beberapa kemampuan saya.</SectionSubTitle>

        <div className="flex -mx-4 flex-wrap mt-20">
          {skillItems.map((item) => (
            <div key={item.id} className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                image={item.image}
                level={item.level}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
