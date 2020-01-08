import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

const Index = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>

  );
};

ReactDOM.render(<Index />, document.getElementById("index")); 