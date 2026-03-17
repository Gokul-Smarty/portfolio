import React from "react";
import gym from "./assets/gym.png";
import ekart from "./assets/ekart.png"

const projects = [
  {
    title: "FitLife – Gym & Workout Planner",
    description:
      "A responsive web application that allows users to explore workout routines, track fitness progress,and maintain a healthy lifestyle with an engaging UI and seamless experience.",
    image: gym,
    tech: "HTML, CSS, Bootstrap",
    // github: "https://github.com/Gokul-Smarty/gymnastic",
    live: "https://gokul-smarty.github.io/gymnastic/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built to deliver a seamless online shopping experience, featuring product listings, user authentication, cart management, and secure checkout functionality.",
    image: ekart,
    tech: "HTML, CSS, JavaScript, Bootstrap",
    // github: "#",
    live: "https://gokul-smarty.github.io/ekart-logistics/",
  },
  {
    title: "xxxxxxxxxxxxxx",
    description:
      "yyyyyyyyyyy",
    image: "https://via.placeholder.com/400x250",
    tech: "toolszzzzzzzzzzz",
    github: "#",
    live: "#",
  },
];

const ProjectCards = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover p-2"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-3">
                {project.description}
              </p>

              <p className="text-sm text-blue-400 mb-4">
                {project.tech}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
