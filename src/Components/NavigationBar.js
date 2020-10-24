import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { Grid, Container, Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as routerLink } from "react-router-dom";

const headerVariants = {
  hidden: {
    y: "-60vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 4,
      delay: 0.8,
      ease: "easeInOut",
      stiffness: 120,
    },
  },
};

export default function NavigationBar() {
  return (
    <motion.header
      style={{ position: "fixed", top: 0, width: "100%", overflow: "hidden", backgroundColor: "#F4F6FC", zIndex: "11" }}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container justify="space-around" spacing={10}>
        <Grid item xs={4}>
          <Button color="black">
            <Link to={"/"} component={routerLink} style={{ color: "black", fontSize: "20px", textDecoration: "none" }}>
              Mark Tan
            </Link>
          </Button>
        </Grid>

        <Grid item xs={4} />

        <Grid item xs={4}>
          <Button color="black">
            <Link href="https://github.com/marktanrj" style={{ color: "black", fontSize: "20px", textDecoration: "none" }} target="_blank">
              Github
            </Link>
          </Button>
          <span style={{ margin: "10px" }} />
          <Button color="black">
            <Link
              href="https://www.linkedin.com/in/marktanrj/"
              style={{ color: "black", fontSize: "20px", textDecoration: "none" }}
              target="_blank"
            >
              Linkedin
            </Link>
          </Button>
        </Grid>
      </Grid>
    </motion.header>
  );
}
