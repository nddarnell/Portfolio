import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/HomePage";
import Projects from "./components/pages/ProjectPage";
import ContactForm from "./components/pages/ContactFormPage";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={Home}/>
        <Route exact path ="/projects" component={Projects}/>
        <Route exact path ="/contact" component={ContactForm}/>
        {/* <Route exact path ="/assets/Nathaniel_Darnell_Resume.pdf" component={Resume}/> */}
        <Route path ="*" component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
