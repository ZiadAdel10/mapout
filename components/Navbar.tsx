"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

export const Navbar = () => {
  const [toogleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/doodle-icons/note.svg"
          width={25}
          height={25}
          className="object-contain"
          alt="logo"
        />
        <p className="logo_text">MAPOUT</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden gap-6">
        <button className="black_btn font-[700] text-3xl">Sign Up</button>
        <button className="outline_btn font-[700]">Sign In</button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div onClick={() => setToggleDropDown((prevDropDown) => !prevDropDown)}>
          <UseAnimations animation={menu2} size={30} speed={3} />
        </div>
        {toogleDropDown && (
          <div className="dropdown">
            <Link
              href="/profile"
              className="dropdown_link -translate-x-[50%] flex items-center gap-2"
              onClick={() => setToggleDropDown(false)}
            >
              <object
                type="image/svg+xml"
                data="/assets/doodle-icons/calendar.svg"
                className="w-[20px] h-[20px]"
              ></object>
              My Calendar
            </Link>
            <button
              type="button"
              onClick={() => {
                setToggleDropDown(false);
              }}
              className="mt-5 w-full black_btn"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
