import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import _ from "lodash";

import "./card.css";

const buttonVariants = {
  visible: {
    boxShadow: " 0px 10px 20px rgba(0, 0, 0, 0.11)",
  },
  hover: {
    scale: 1.07,
    boxShadow: " 0px 10px 20px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.96,
  },
};

const useStyles = makeStyles({});

export default function ProjectCard(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Link to={`/project/${data.id}`} style={{ textDecoration: "none" }}>
      <div style={{ position: "relative" }}>
        <motion.div class="card" variants={buttonVariants} initial="visible" whileHover="hover" whileTap="tap">
          <div
            class="card-image-gif"
            style={{
              backgroundImage: `url(${data.gif})`,
            }}
          ></div>
          <div
            class="card-image"
            style={{
              backgroundImage: `url(${data.url})`,
            }}
          ></div>
          <div class="card-description">
            <h4 style={{ margin: "3px", color: "black" }}>{data.title}</h4>
            <div>
              {_.map(data.chips, (chip, index) => (
                <Chip key={`${chip}-${index}`} label={chip} size="small" style={{ margin: 1 }} className={classes.chip} />
              ))}
            </div>
            <p style={{ marginTop: "10px", color: "black", fontSize: "11px" }}>{data.description}</p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
