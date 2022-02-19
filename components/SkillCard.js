/* eslint-disable @next/next/no-img-element */
import React from "react";

function SkillCard({ name, level, image }) {
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img alt="skills" src={image} className="rounded-full h-16 mr-6" />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm font-semibold text-gray-400 mt-1">{level}</p>
      </div>
    </div>
  );
}

export default SkillCard;
