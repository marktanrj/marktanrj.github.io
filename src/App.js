import React, { useLayoutEffect } from "react";
import "./App.css";
import { Switch, Route, Link, useLocation, Redirect } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./Constants/theme";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

import _ from "lodash";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    _.defer(() => {
      window.scrollTo(0, 0);
    }, []);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationBar />
        <div style={{ marginTop: "60px" }}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/project" component={HomePage} />
              <Route exact path="/project/:id" component={ProjectPage} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
