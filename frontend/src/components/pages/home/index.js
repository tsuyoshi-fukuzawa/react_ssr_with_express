import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      This is root<br/>
      <Link to={'/sample'}> sample </Link>
    </div>
  );
};

export default Home;