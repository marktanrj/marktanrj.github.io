import React from "react";

import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";

import { motion } from "framer-motion";
import _ from "lodash";

import ProjectCard from "../Components/ProjectCard";
import { projectData } from "../Constants/projectData";
import me from "../Images/me.jpg";

const nameVariants = {
  hidden: {
    y: "-20vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      duration: 3,
      ease: "easeInOut",
      stiffness: 100,
    },
  },
};

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 3,
      ease: "easeIn",
      stiffness: 50,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function HomePage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Container maxWidth="md" style={{ marginBottom: "120px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <motion.div variants={nameVariants} initial="hidden" animate="visible" exit="exit">
              <img style={{ borderRadius: "100px" }} src={me} width="130px" alt="profile-pic" />
              <Typography style={{ marginTop: "10px" }} variant="h4">
                Mark Tan
              </Typography>
              <Typography style={{ marginTop: "5px", fontFamily: "roboto" }} variant="h6">
                Final Year Information Systems Student
              </Typography>
              <Typography style={{ marginTop: "5px", fontFamily: "roboto" }} variant="h6">
                Aspiring Software Engineer
              </Typography>
            </motion.div>
          </Grid>
          {_.map(projectData, (item) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ProjectCard data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </motion.div>
  );
}
