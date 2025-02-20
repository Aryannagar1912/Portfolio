import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiLeetcode,
  SiAwsamplify,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.9)] flex flex-col items-center justify-center text-white text-xl font-bold cursor-pointer transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360, borderColor: skill.color }}
        style={{ borderColor: skill.color }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center relative border-4"
      >
        <div className="text-6xl md:text-7xl" style={{ color: skill.color }}>
          {skill.icon}
        </div>
      </motion.div>

      <h3
        className="mt-4 text-lg md:text-xl font-semibold"
        style={{ color: skill.color }}
      >
        {skill.name}
      </h3>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Java", icon: <DiJava />, color: "#007396" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#808080" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "DSA", icon: <SiLeetcode />, color: "#FFA116" },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 bg-[#2E2B2B] text-white px-6 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12"
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
