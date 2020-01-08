import React from "react";
import { Link } from 'react-router-dom'


class About extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>サンプルページです。このページはSSRではありません。</p>
        <Link to='/'>home</Link>
      </div>
    );
  }
}

export default About;
