import React from "react";
import "./App.css";
import { Switch, Route, Link, useLocation, Redirect } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./Constants/theme";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigationBar />
        <div style={{ marginTop: "60px" }}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
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
