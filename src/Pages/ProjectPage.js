import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../Constants/projectData";
import { Grid, Container, Button, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>{projectDetails && projectDetails.title}</h2>
          </Grid>
          <Grid item xs={12}>
            {projectDetails &&
              projectDetails.buttons &&
              Object.entries(projectDetails.buttons).map(([buttonName, item]) => {
                return (
                  <Button component="a" href={item.url} target="_blank" variant="contained" color={item.theme} key={buttonName}>
                    {buttonName}
                  </Button>
                );
              })}
          </Grid>
          {!isDesktop && (
            <Grid item xs={12}>
              {projectDetails.gif ? (
                <img src={projectDetails.gif} alt="project-details" width="100%" />
              ) : (
                <img src={projectDetails.url} alt="project-details" width="100%" />
              )}
            </Grid>
          )}
          <Grid item container xs={12}>
            <Grid item md={7} xs={12}>
              <Box textAlign="left">
                {projectDetails &&
                  projectDetails.details &&
                  projectDetails.details.map((info) => {
                    return (
                      <React.Fragment>
                        <h3>{info.header}</h3>
                        <p>{info.text}</p>
                      </React.Fragment>
                    );
                  })}
              </Box>
            </Grid>
            {isDesktop && (
              <Grid item md={5}>
                {projectDetails.gif ? (
                  <img src={projectDetails.gif} alt="project-details" width="100%" />
                ) : (
                  <img src={projectDetails.url} alt="project-details" width="100%" />
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
