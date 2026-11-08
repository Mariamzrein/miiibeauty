import React from "react";
import { Link } from "react-router-dom";
import '../styles/About.css';
function About() {
  return (

    <main>

      <p className="Welcome">
        Welcome to MII Beauty, where we celebrate diversity and individuality,
        our mission is to empower everyone to express themselves through
        high quality, inclusive beauty products.
      </p>

      <p className="by">
        Proudly by Mariam Zrein
      </p>

      <Link className="home" to="/">
        Let's Go Back
      </Link>

    </main>

  );
}

export default About;