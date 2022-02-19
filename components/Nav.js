import React from "react";
import classnames from "classnames";
import NavItem from "./NavItem";

function Nav({ vertical }) {
  return (
    <ul
      className={classnames("flex", {
        "flex-col space-y-6": vertical,
        "justify-center space-x-10": !vertical,
      })}
    >
      <NavItem href="#profile">Profile</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </ul>
  );
}

export default Nav;
