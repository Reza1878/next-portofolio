import React from "react";

function Button({ styles = "", href, children, variant = "outlined", pill }) {
  const variants = {
    outlined: `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    filled: "bg-yellow-500 hover:bg-yellow-600 text-black",
    filledBlack: "bg-black hover:opacity-80 text-white",
  };
  return (
    <a
      href={href}
      className={`transition cursor-pointer border py-2 px-10 ${
        pill ? "rounded-full" : ""
      } font-semibold text-lg inline-block ${styles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;
