import React from "react";
import { Link } from 'react-router-dom'

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

export default Home;
