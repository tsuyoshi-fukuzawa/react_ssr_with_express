import React from "react";
import { Link } from 'react-router-dom'

const About = () => (
  <div>
    <h2>About</h2>
    <p>サンプルページです。このページはSSRではありません。</p>
    <Link to='/'>home</Link>
  </div>
)

export default About;
