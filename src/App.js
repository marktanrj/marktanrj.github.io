import React, { useLayoutEffect, Suspense } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Constants/theme";

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import _ from "lodash";

// const NavigationBar = React.lazy(() => import("./Components/NavigationBar"));
import NavigationBar from "./Components/NavigationBar";
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ProjectPage = React.lazy(() => import("./Pages/ProjectPage"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{ marginTop: "60px" }}>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/project" component={HomePage} />
                <Route exact path="/project/:id" component={ProjectPage} />
              </Switch>
            </AnimatePresence>
          </div>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
