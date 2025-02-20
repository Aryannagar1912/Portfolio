import { motion } from "framer-motion";
import React from "react";

const DesktopProjects = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`md:flex flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto py-12 px-16 rounded-lg shadow-xl bg-[#1E1E1E] border border-gray-700 hover:shadow-2xl transition-all ${
        isEven ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 h-[450px] overflow-hidden rounded-lg shadow-lg group relative">
        <div
          className="absolute top-0 left-0 w-full bg-cover bg-no-repeat transition-transform duration-[10s] ease-in-out"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: project.height,
            transform: "translateY(0)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = `translateY(${project.translateY})`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        />
      </div>

      {/* Project Details */}
      <div className="w-1/2 text-left">
        <h3 className="text-3xl font-extrabold text-[#FFD700] mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-[#D97706] text-xl font-bold hover:underline transition duration-300"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

// Main Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Vijay Mobile & Accessories",
      description:
        "An e-commerce platform offering mobile covers, tempered glasses, and accessories. The website provides a seamless shopping experience with a modern UI, secure payments, and real-time order tracking.",
      image: "vijayShop.png",
      link: "https://vijay-mobile-shop.vercel.app",
      height: "1065%",
      translateY: "-90.5%",
    },
    {
      title: "Airbnb Clone",
      description:
        "A full-stack web app inspired by Airbnb, allowing users to browse property listings, book stays, and manage reservations. Features user authentication, image uploads via Cloudinary, and advanced form validation.",
      image: "airbnb.png",
      link: "https://major-project-5zel.onrender.com",
      height: "560%",
      translateY: "-82.2%",
    },
    {
      title: "Myntra Clone",
      description:
        "A complete e-commerce replica of Myntra, featuring a dynamic product catalog, real-time backend API integration, user authentication, and a smooth UI experience that mimics online fashion stores.",
      image: "myntra.png",
      link: "https://github.com/Aryannagar1912/Myntra-App",
      height: "200%",
      translateY: "-50%",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that displays real-time temperature, humidity, wind speed, and condition-based background themes. Users can search for any city and get accurate weather updates instantly.",
      image: "project4.png",
      link: "https://github.com/Aryannagar1912/Weather-App",
      height: "100%",
    },
    {
      title: "React Post Manager",
      description:
        "A simple yet powerful CRUD-based application where users can create, view, and delete posts. Built with React, this project provides an intuitive interface for managing content.",
      image: "social.png",
      link: "https://github.com/Aryannagar1912/React-Post-Manager",
      height: "1786%",
      translateY: "-94.2%",
    },
    {
      title: "Cricket Scoring Game",
      description:
        "A user-friendly cricket scoring game where users can track scores for two teams. Features include scoring options like no ball, wide, wicket, dot ball, and runs (1, 2, 3, 4, or 6). The game is designed for 5 overs with a maximum of 10 wickets.",
      image: "cricket.png",
      link: "https://github.com/Aryannagar1912/cricket_scoring",
      height: "100%",
    },
    {
      title: "Simon Game",
      description:
        "An interactive memory-based game where players must repeat random sequences of lights by clicking the colored divs in the correct order. Features engaging UI and sound effects for an exciting gameplay experience.",
      image: "simon.png",
      link: "https://github.com/Aryannagar1912/Simon-Game",
      height: "99%",
    },
  ];

  return (
    <section
      id="projects"
      className="md:block w-full py-20 bg-[#2E2B2B] text-white px-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#D97706] text-center mb-12"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <DesktopProjects key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
