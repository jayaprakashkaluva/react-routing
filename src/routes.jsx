import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

export const routes = () => {
    return (
    <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}/>
        <Route  exact path="/contact" component={Contact}/>
    </Router>
);
}