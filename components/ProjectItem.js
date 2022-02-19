/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProjectItem({ name, description, image }) {
  return (
    <article className="text-center ">
      <img src={image} alt="haster" className="w-full rounded-lg" />
      <h3 className="font-semibold text-xl font-sans mt-4 mb-1">{name}</h3>
      <p className="font-sans text-base text-gray-400">{description}</p>
    </article>
  );
}

export default ProjectItem;
