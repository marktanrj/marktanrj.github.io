import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { projectData } from "../Constants/projectData";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", mass: 0.4, damping: 8, when: "beforeChildren", staggerChildren: 0.4 },
  },
  exit: {
    x: "100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
export default function Project({ match }) {
  const [projectDetails, setProjectDetails] = useState(projectData[match.params.id]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <h2>{projectDetails && projectDetails.title}</h2>
      <p>{projectDetails && projectDetails.details}</p>
    </motion.div>
  );
}
