import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import DefaultLayout from "./components/common/layouts/DefaultLayout";

const App = () => (
    <Router>
        <Switch>
            <Route
                path="/"
                exact
                component={() => (
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                )}
            />
            <Route path="/about" exact component={() => <About />} />
        </Switch>
    </Router>
);

export default App;
