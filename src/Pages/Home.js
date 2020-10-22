import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";
import me from "../Images/me.jpg";
import { Link } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";

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

export default function Home() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <motion.div variants={nameVariants} initial="hidden" animate="visible" exit="exit">
              <img style={{ borderRadius: "100px" }} src={me} width="130px" />
              <Typography style={{ marginTop: "10px" }} variant="h4">
                Mark Tan
              </Typography>
              <Typography style={{ marginTop: "5px", fontFamily: "roboto" }} variant="h6">
                Final Year Student | Software Engineer
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
