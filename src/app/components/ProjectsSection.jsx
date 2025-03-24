"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Afriarch Design",
    description: "Innovative, social, green, realistic and remarkable architecture for a changing world.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://afriarch.net/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://flipgoo.com",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Zyyada cosmetics online store",
    description: "Project 4 description",
    image: "/images/projects/zyyada.png",
    tag: ["All", "Web"],
    gitUrl: "https://zyyada.com.tm/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Akbulut Economic Society ",
    description: "website for Akbulut Economic Society",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.akbulut.com.tm/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "vue 3 jobs project",
    description: "vue 3 composition api with json server",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://agamurat-vue3-jobs-listing.vercel.app/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
