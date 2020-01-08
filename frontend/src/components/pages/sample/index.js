import React from 'react';
import { Link } from 'react-router-dom';

const SampleIndex = props => {
  return (
    <div>
      This is sample page.<br/>
      <Link to={'/'}> top </Link>
    </div>
  );
};

export default SampleIndex;