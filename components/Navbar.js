/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classnames from "classnames";
import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>

        <div className="w-6/12 hidden md:block">
          <Nav />
        </div>

        <div className="w-3/12 text-right hidden md:block">
          <Button pill href="#contact">
            Contact
          </Button>
        </div>

        <div className="w-9/12 text-right md:hidden">
          <img
            src="/img/menu.svg"
            onClick={() => setOpenMenu(true)}
            alt="menu"
            className="inline-block"
          />
        </div>
      </div>
      <div
        className={classnames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          { "-right-full": !openMenu },
          { "right-0": openMenu }
        )}
      >
        <img
          src="/img/x.svg"
          alt="x-menu"
          className="absolute top-8 right-8 w-8"
          onClick={() => setOpenMenu(false)}
        />
        <Nav vertical />
      </div>
    </>
  );
}

export default Navbar;
