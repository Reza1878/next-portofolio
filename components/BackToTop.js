/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import classnames from "classnames";

function BackToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a
      href="#hero"
      className={classnames(
        "fixed right-6 bottom-8 shadow-md bg-yellow-500 hover:bg-yellow-600 transition-all cursor-pointer w-15 p-4 rounded-full",
        { block: scrollY > 0 },
        { hidden: scrollY === 0 }
      )}
    >
      <img
        alt="back-to-top"
        src="/img/chevron-up.svg"
        className="mx-auto w-full"
      />
    </a>
  );
}

export default BackToTop;
