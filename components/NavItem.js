import React from "react";

function NavItem({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="md:text-white text-lg text-opacity-60 hover:text-opacity-100 cursor-pointer transition font-semibold"
      >
        {children}
      </a>
    </li>
  );
}

export default NavItem;
