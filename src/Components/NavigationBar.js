import React from "react";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { Grid, Container, Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as routerLink } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import VisibleItemList from "../containers/VisibleItemList";

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

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 20,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#F4F6FC",
    color: "black",
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    minHeight: "50px",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  link: {
    color: "black",
    fontSize: "20px",
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        <ListItem component="a" button href="https://github.com/marktanrj" target="_blank" key="github">
          <ListItemText primary={"Github"} />
        </ListItem>
        <ListItem component="a" button href="https://www.linkedin.com/in/marktanrj/" target="_blank" key="linkedin">
          <ListItemText primary={"Linkedin"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <motion.header className={classes.header} variants={headerVariants} initial="hidden" animate="visible">
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Grid justify="space-around" container>
            <Grid item>
              <Button>
                <Link to={"/"} component={routerLink} className={classes.link} style={{ textDecoration: "none" }}>
                  Mark Tan
                </Link>
              </Button>
            </Grid>
            <Hidden xsDown implementation="css">
              <Grid item>
                <Button>
                  <Link href="https://github.com/marktanrj" target="_blank" className={classes.link} style={{ textDecoration: "none" }}>
                    Github
                  </Link>
                </Button>
                <span style={{ marginLeft: "10px" }} />
                <Button>
                  <Link
                    href="https://www.linkedin.com/in/marktanrj/"
                    target="_blank"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Linkedin
                  </Link>
                </Button>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        {/* <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden> */}
      </nav>
      <Toolbar className={classes.toolbar} />
    </motion.header>
  );
}
