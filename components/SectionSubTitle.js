import React from "react";

function SectionSubTitle({ children, align = "center" }) {
  return (
    <p className={`text-lg mt-2 text-gray-600 text-${align} font-sans`}>
      {children}
    </p>
  );
}

export default SectionSubTitle;
