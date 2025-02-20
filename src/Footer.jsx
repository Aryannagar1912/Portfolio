import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2E2B2B] text-white py-6">
      <div className="border-t border-white/20 text-white bg-gradient-to-l to-customeDark-500 from-customeDark-600 w-full min-h-fit h-1/2 py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 flex flex-col gap-3 justify-evenly relative z-40">
        <div className="absolute top-0 right-0 hidden sm:flex size-32 m-3 justify-center items-center overflow-hidden">
          <div
            id="load-box"
            className="size-24 sm:size-32 border border-r-transparent rounded-full flex items-center justify-center"
          >
            <div
              id="load-box"
              className="size-16 sm:size-24 border border-l-transparent rounded-full flex items-center justify-center"
            ></div>
          </div>
          <h1
            id="load-name-big"
            className="text-base sm:text-xl absolute text-white ml-1.5"
          >
            <span className="text-[#D97706]">A</span>
            <span className="text-[#D97706]">r</span>
            <span className="text-[#D97706]">y</span>
            <span className="text-[#D97706]">a</span>
            <span className="text-[#D97706]">n</span>
            <span>&nbsp;</span>
          </h1>
        </div>
        <h1 className="font-bold text-2xl whitespace-nowrap border-b pb-4 sm:pb-5 md:pb-6 mb-4 sm:mb-6 border-white/15">
          Aryan nagar | Portfolio
        </h1>
        <div className="flex w-full justify-start md:justify-evenly text-xs md:text-sm gap-5 sm:gap-10">
          <div className="flex flex-col justify-between lg:flex-row gap-7 w-full">
            <div className="flex lg:justify-center items-start min-w-fit w-fit md:w-60">
              <ul className="w-fit flex flex-col gap-1 items-start">
                <li className="font-bold mb-2 text-sm sm:text-base">Contact</li>
                <li>Aryan nagar</li>
                <li>Bhopal, MP</li>
                <li>Pincode - 462046</li>
                <li>
                  <a
                    href="mailto:contact.aryannagar193@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {" "}
                    contact.aryannagar193@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex lg:justify-center items-start min-w-fit w-fit md:w-60">
              <ul className="w-fit flex flex-col gap-1 items-start">
                <li className="font-bold mb-2 text-sm sm:text-base">
                  Expertise
                </li>
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
                <li>MERN Stack</li>
                <li>Java</li>
                <li>Data Structure & Algorithm</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-start md:justify-center items-center lg:flex-row gap-7 w-full">
            <div className="flex lg:justify-center items-start min-w-fit w-16 md:w-56">
              <ul className="w-fit flex flex-col gap-1 items-start">
                <li className="font-bold mb-2 text-sm sm:text-base">Pages</li>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#project" className="hover:underline">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex lg:justify-center items-start min-w-fit w-16 md:w-52">
              <ul className="w-fit flex flex-col gap-1 items-start">
                <li className="font-bold mb-2 text-sm sm:text-base">Links</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aryan-nagar19"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Aryannagar1912"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/aryan__nagar_"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact.aryannagar193@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    E-Mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm sm:text-base border-t pt-4 sm:pt-7 mt-4 sm:mt-6 border-white/15">
            All rights reserved 2025 © Aryan nagar | Portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
