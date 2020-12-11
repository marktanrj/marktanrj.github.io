import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../Constants/projectData";
import { Grid, Container, Button, Box, Chip, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as routerLink } from "react-router-dom";

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

  const [backButtonHover, setBackButtonHover] = useState(false);

  const mediaContent = (
    <Grid item md={5}>
      {projectDetails.detailsMedia &&
        projectDetails.detailsMedia.map((media, idx) => {
          return (
            <img
              key={idx}
              src={media}
              alt="project-media"
              style={
                isDesktop
                  ? { maxWidth: "600px", maxHeight: "400px", marginTop: "10px" }
                  : { width: "100%", maxHeight: "400px", marginTop: "10px" }
              }
            />
          );
        })}
    </Grid>
  );

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Container>
        <Grid container spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={12} md={1}>
              <Button
                component={routerLink}
                to="/"
                variant={backButtonHover ? "contained" : "outlined"}
                color="primary"
                startIcon={<ArrowBackIcon />}
                style={{ borderWidth: "2px" }}
                onMouseEnter={() => setBackButtonHover(true)}
                onMouseLeave={() => setBackButtonHover(false)}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} md={10}>
              <h2>{projectDetails && projectDetails.title}</h2>
            </Grid>
            <Grid item xs={12} md={1} />
          </Grid>
          <Grid item xs={12}>
            {projectDetails &&
              projectDetails.buttons &&
              Object.entries(projectDetails.buttons).map(([buttonName, item]) => {
                return (
                  <Button
                    component="a"
                    href={item.url}
                    target="_blank"
                    variant="contained"
                    color={item.theme}
                    key={buttonName}
                    style={{ fontWeight: "bold" }}
                  >
                    {buttonName}
                  </Button>
                );
              })}
          </Grid>
          {!isDesktop && mediaContent}
          <Grid item container xs={12}>
            <Grid item md={7} xs={12}>
              <Box textAlign="left">
                {projectDetails && projectDetails.allChips && (
                  <React.Fragment>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Technology Stack
                    </Typography>
                    {projectDetails.allChips.map((chip) => {
                      return (
                        <Chip
                          key={chip}
                          label={chip}
                          color="primary"
                          style={{ marginRight: "5px", marginTop: "5px", fontWeight: "bold", fontSize: "13px" }}
                        />
                      );
                    })}
                  </React.Fragment>
                )}
                {projectDetails &&
                  projectDetails.details &&
                  projectDetails.details.map((info) => {
                    return (
                      <React.Fragment key={info.header}>
                        <Typography variant="h6" style={{ fontWeight: "bold", marginTop: "10px" }}>
                          {info.header}
                        </Typography>
                        {Array.isArray(info.text) ? (
                          <Typography variant="body1">
                            {info.text.map((point) => {
                              return <li key={point}>{point}</li>;
                            })}
                          </Typography>
                        ) : (
                          <Typography variant="body1">{info.text}</Typography>
                        )}
                      </React.Fragment>
                    );
                  })}
              </Box>
            </Grid>
            {isDesktop && mediaContent}
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
