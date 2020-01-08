import React from 'react';
import { Link } from 'react-router-dom';

const SampleShow = props => {
    return (
        <div>
            This Page is About Page!!<br />
            <Link to={'/'}>top</Link>
        </div>
    );
};

export default SampleShow;