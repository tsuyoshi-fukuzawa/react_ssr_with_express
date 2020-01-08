import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Index = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>

  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>ようこそ</p>
    <ul>
      <li><Link to='/about'>about</Link></li>
      <li><Link to='/contact'>contact</Link></li>
    </ul>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>サンプルページです。このページはSSRではありません。</p>
    <Link to='/'>home</Link>
  </div>
)
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>お問い合わせページです。このページはSSRされます。</p>
    <Link to='/'>home</Link>
  </div>
)

ReactDOM.render(<Index />, document.getElementById("index")); 