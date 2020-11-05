import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../Constants/projectData";
import { Grid, Container, Button } from "@material-ui/core";

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
export default function ProjectPage({ match }) {
  const [projectDetails] = useState(projectData[match.params.id]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>{projectDetails && projectDetails.title}</h2>
          </Grid>
          <Grid item xs={12}>
            {projectDetails && projectDetails.projectLink && (
              <Button component="a" href={projectDetails && projectDetails.projectLink} target="_blank" variant="contained" color="primary">
                Project Link
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            <img src={projectDetails.gif} alt="project-details" />
          </Grid>
          <Grid item xs={12}>
            <p>{projectDetails && projectDetails.details}</p>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
