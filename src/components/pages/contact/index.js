import React from "react";
import { Link } from 'react-router-dom'

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>お問い合わせページです。このページはSSRされます。</p>
    <Link to='/'>home</Link>
  </div>
)

export default Contact;
