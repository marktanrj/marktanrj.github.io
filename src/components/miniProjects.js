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
    title: "TheMemeMakerBot",
    description: "subtitle1",
  },
  {
    id: 2,
    title: "Photoshop Bot",
    description: "subtitle2",
  },
]

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

const MiniProjects = () => {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <h3 style={{ margin: 0 }}>Telegram Bots</h3>
      <Grid container spacing={3}>
        <AnimateSharedLayout type="crossfade">
          <Grid item xs={12} md={selected !== 0 ? 5 : 0}>
            <AnimatePresence exitBeforeEnter>
              {selected === 1 && (
                <motion.div key="1" layoutId={1}>
                  <motion.img src={demo} />
                </motion.div>
              )}
              {selected === 2 && (
                <motion.div key="2" layoutId={2}>
                  <motion.img src={demo} />
                </motion.div>
              )}
            </AnimatePresence>
          </Grid>
          <Grid item xs={12} md={selected !== 0 ? 7 : 12}>
            <Grid container spacing={2}>
              <AnimatePresence exitBeforeEnter>
                {items.map(item => (
                  <Grid
                    item
                    xs={12}
                    key={item.title}
                    style={selected == item.id ? { margin: "15px 0" } : {}}
                  >
                    <motion.div
                      layout
                      className="miniProjectsContainer"
                      whileHover={{ scale: selected == item.id ? 1 : 1.1 }}
                      whileTap={{ scale: selected == item.id ? 1 : 0.9 }}
                      onClick={() => setSelected(item.id)}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <motion.img
                            layoutId={item.id}
                            src={demo}
                            width="100%"
                            style={{
                              backgroundSize: "cover",
                              marginBottom: "-7px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={9} style={{ paddingTop: "7px" }}>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          {selected === item.id && <Content />}
                        </Grid>
                      </Grid>
                    </motion.div>
                  </Grid>
                ))}
              </AnimatePresence>
            </Grid>
          </Grid>
        </AnimateSharedLayout>
      </Grid>
    </>
  )
}

export default MiniProjects
