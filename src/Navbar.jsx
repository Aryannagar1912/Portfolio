import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //   <nav className='w-full py-4 bg-[#2E2B2B] drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]'>
    <nav
      className={`w-full py-4 bg-[#2E2B2B] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "drop-shadow-none"
          : "drop-shadow-[0px_0px_30px_rgba(255,140,0,0.9)]"
      }`}
    >
      <div className="container mx-auto flex justify-between  items-center px-6">
        <motion.a
          className="text-2xl font-bold text-gray-200"
          whileHover={{ scale: 1.1, color: "#D97706" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="md:w-20 w-16"
            src="AryanLogo_dark.png"
            alt="Aryan"
          ></img>
        </motion.a>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`absolute md:relative  ${
            isOpen ? "block" : "hidden"
          } top-16  bg-[#2F2B2B] md:top-0 left-0 w-full md:w-auto  md:bg-transparent md:flex md:items-center md:space-x-10 transition-all duration-300 ease-in-out md:block`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0 ">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#D97706" }}
                  className="text-lg font-bold text-gray-200"
                >
                  {item}
                </motion.a>
              )
            )}
            <motion.button
              className="px-6 py-2 bg-[#d97706] text-white font-bold rounded-full shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#B45309" }}
              onClick={() => {
                window.location.href =
                  "mailto:aryannagar193@gmail.com?subject=Job%20Opportunity&body=Hello%20Aryan,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.";
              }}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
