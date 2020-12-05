import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import _ from "lodash";

import "../styles/card.css";

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

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Link to={`/project/${data.id}`} style={{ textDecoration: "none" }}>
      <div style={{ position: "relative" }}>
        <motion.div
          className={isDesktop ? "card" : "cardmobile"}
          variants={buttonVariants}
          initial="visible"
          whileHover="hover"
          whileTap="tap"
        >
          {data.gif ? (
            <div
              className="card-image-gif"
              style={{
                backgroundImage: `url(${data.gif})`,
              }}
            />
          ) : data.url ? (
            <div
              className="card-image-gif"
              style={{
                backgroundImage: `url(${data.url})`,
              }}
            />
          ) : (
            <React.Fragment />
          )}
          {data.url && (
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${data.url})`,
              }}
            />
          )}
          <div className="card-description">
            {data.title && <h4 style={{ margin: "3px", color: "black" }}>{data.title}</h4>}
            {data.cardChips && (
              <div>
                {_.map(data.cardChips, (chip, index) => (
                  <Chip key={`${chip}-${index}`} label={chip} size="small" style={{ margin: 1 }} className={classes.chip} />
                ))}
              </div>
            )}
            {data.cardDescription && <p style={{ marginTop: "10px", color: "black", fontSize: "11px" }}>{data.cardDescription}</p>}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string,
};
