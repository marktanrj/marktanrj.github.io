import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import me from "../Images/me.jpg";
import "./card.css";
import styled from "styled-components";

const buttonVariants = {
  hover: {
    scale: 1.07,
    boxShadow: " 0px 15px 20px rgba(0, 0, 0, 0.11)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.96,
  },
};

const useStyles = makeStyles({});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Link to="/project" style={{ textDecoration: "none" }}>
      <div style={{ position: "relative" }}>
        <motion.div class="card" variants={buttonVariants} whileHover="hover" whileTap="tap">
          {/* <div class="property-image" /> */}
          <div class="card-image"></div>
          <div>
            <h4>TheMemeMakerBot</h4>
            <p>This bot makes memes</p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
