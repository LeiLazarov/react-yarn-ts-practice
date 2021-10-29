import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutUs';

const App = () => <>
    <Router>
        <Switch>
            <Route
                path='/'
                exact
                component={ () => <Home/>}
            />
            <Route
                path='/about'
                exact
                component={ () => <About/>}
            />
        </Switch>
    </Router>
</>;

export default App;
