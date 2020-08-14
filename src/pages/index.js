import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
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
import MiniProjects from "../components/miniProjects"
import Projects from "../components/projects"

const items = [
  {
    id: 1,
    title: "TheMemeMakerBot",
    description: "subtitle1",
  },
  {
    id: 2,
    title: "Photoshop Bot",
    description: "subtitle2",
  },
  {
    id: 3,
    title: "Telegram Bot Course",
    description: "subtitle3",
  },
]

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  // duration: 1,
  mass: 0.5,
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </motion.div>
  )
}

const IndexPage = () => {
  const [selected, setSelected] = useState(0)

  return (
    <Layout>
      <MiniProjects />
      <br />
      <Projects />
    </Layout>
  )
}

export default IndexPage
