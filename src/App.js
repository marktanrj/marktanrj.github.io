import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./Constants/theme";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./Components/NavigationBar";
import Home from "./Pages/Home";
import Project from "./Pages/Project";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationBar />
        <div style={{ marginTop: "60px" }}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route exact path="/project" component={Project} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
