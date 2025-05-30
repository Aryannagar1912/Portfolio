import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiPostman,
  SiLeetcode,
} from "react-icons/si";
const Marque = () => {
  const icons = [
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-500" />,
    <FaJs className="text-yellow-500" />,
    <FaReact className="text-cyan-500" />,
    <FaNodeJs className="text-green-500" />,
    <FaPython className="text-blue-500" />,
    <FaGitAlt className="text-red-500" />,
    <FaDatabase className="text-gray-500" />,
    <FaJava className="text-orange-600" />,
    <FaGithub className="text-gray-700" />,
    <SiExpress className="text-gray-700" />,
    <SiMongodb className="text-green-500" />,
    <SiMysql className="text-blue-600" />,
    <SiRedux className="text-purple-500" />,
    <SiPostman className="text-orange-500" />,
    <SiLeetcode className="text-black" />,
  ];
  return (
    <div className="relative w-full bg-white-300 py-4 overflow-hidden shadow-lg">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1E1C1C] via-[#1E1C1C] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1E1C1C] via-[#1E1C1C] to-transparent z-10"></div>

      <div className="flex overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex space-x-10 items-center px-10 min-w-max"
        >
          {[...icons, ...icons, ...icons, ...icons, ...icons].map(
            (icon, index) => (
              <div key={index} className="text-5xl">
                {icon}
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Marque;
