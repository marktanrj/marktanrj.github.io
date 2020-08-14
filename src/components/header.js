import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <motion.div
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.8 }}
        initial="hidden"
        animate="visible"
        variants={variants}
        // animate={{ x: -200 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        {/* <Link className={headerStyles.header} to="/"> */}
        <h1>{data.site.siteMetadata.title}</h1>
        {/* </Link> */}
      </motion.div>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a
                className={headerStyles.navItem}
                href="https://www.linkedin.com/in/marktanrj/"
                target="_blank"
              >
                Linkedin
              </a>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
