import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Index = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>

  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
    <Link to='/about'>about</Link>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
    <Link to='/'>home</Link>
  </div>
)

ReactDOM.hydrate(<Index />, document.getElementById("index")); 