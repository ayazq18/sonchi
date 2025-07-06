"use client";
import Image from "next/image";
import React, { useState } from "react";
import { headings } from "./mock";
import { Menu, X } from "lucide-react";

function Header() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[484px] flex flex-col justify-center items-center">
      <div className="sticky top-[400px] z-99 w-full bg-[#e9e9f1a2] flex justify-between items-center p-4 max-h-fit sm:max-h-[100px] gap-4">
        {/* Menu icon on small screens */}
        <div className="sm:hidden flex items-center">
          <Menu
            className="text-[#BB1D1D] w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Drawer */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 md:hidden">
            <div className="flex justify-between items-center mb-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/Sonchi-Red-Logo.png"
                  alt="logo"
                  height={35}
                  width={90.87}
                  // layout="responsive"
                  className="h-8"
                />
              </div>
              <X
                className="w-6 h-6 text-[#BB1D1D] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            {headings.map((heading, index) => (
              <p
                key={index}
                className={`text-sm py-3 border-b cursor-pointer ${
                  selectedIndex === index
                    ? "text-[#BB1D1D] font-extrabold"
                    : "text-[#272D2F] font-medium"
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  setMenuOpen(false);
                }}
              >
                {heading.name}
              </p>
            ))}
          </div>
        )}

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/Sonchi-Red-Logo.png"
            alt="logo"
            height={65}
            width={212.87}
            layout="responsive"
            className="h-48 hidden md:block"
          />
        </div>

        {/* Headings - hidden on small screens */}
        <div className="hidden md:flex items-center gap-10 sm:gap-7 md:gap-4 lg:gap-10 w-full sm:w-auto">
          {headings.map((heading, index) => (
            <p
              key={index}
              style={{ fontFamily: "Manrope" }}
              className={`text-md md:text-md leading-[18px] cursor-pointer text-nowrap font-bold  ${
                selectedIndex === index ? "text-[#BB1D1D]" : "text-[#272D2F]"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {heading.name}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{ fontFamily: "Manrope" }}
          className="flex justify-end gap-2 sm:gap-4 md:gap-1 lg:gap-2 w-full sm:w-auto"
        >
          <button className="border border-[#BB1D1D] text-[#BB1D1D] font-bold w-[70px] md:w-[116px] h-[30px] md:h-[40px] rounded-[20px] text-sm md:text-base  ">
            Sign Up
          </button>
          <button className="bg-[#BB1D1D] text-white font-bold w-[70px] md:w-[116px] h-[30px] md:h-[40px] rounded-[20px] text-sm md:text-base ">
            Log In
          </button>
        </div>
      </div>

      <div className="text-center px-4">
        <h1
          style={{ fontFamily: "Germania One, cursive" }}
          className="font-extrabold  text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[44px] lg:text-[54px] lg:leading-[48px] pb-6 sm:pb-8 lg:pb-10"
        >
          Home {">"} Host
        </h1>
        <p
          style={{ fontFamily: "Manrope" }}
          className="font-bold text-[16px] leading-[22px] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[26px] lg:text-[22px] lg:leading-[28px]"
        >
          Reference site about Lorem Ipsum, giving information on its origins,
        </p>
      </div>
    </div>
  );
}

export default Header;
