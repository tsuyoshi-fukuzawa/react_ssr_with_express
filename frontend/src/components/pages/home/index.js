import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            Name is {props.name || 'hoge'} <br />
            Path is {props.match.path} <br />
            <Link to={'/sample'}>about</Link>
        </div>
    );
};

export default Home;