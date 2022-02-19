import React from "react";

function SectionTitle({ children, align = "center" }) {
  return (
    <h2 className={`text-2xl font-semibold font-mono text-${align}`}>
      {children}
    </h2>
  );
}

export default SectionTitle;
