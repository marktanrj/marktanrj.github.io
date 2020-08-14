import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useCycle,
} from "framer-motion"
import me from "../images/me.png"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import demo from "../images/legif.gif"

const items = [
  {
    id: 1,
    title: "Telegram Bot Udemy Course",
    description: "subtitle1",
  },
  {
    id: 2,
    title: "Trident",
    description: "subtitle2",
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <h3 style={{ margin: 0 }}>Projects</h3>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>Telegram Bot Udemy Course</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>Trident</Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects
