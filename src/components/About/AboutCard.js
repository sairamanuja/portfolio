import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Saraswathi Ramanuja </span>
    from <span className="purple"> Hyderabad, India.</span>
    <br />
    <br />
    
    A Computer Science student with a CGPA of 8, passionate about full-stack development.
    <br />
    Proficient in building web applications using <span className="purple">React, Node.js, and MongoDB</span>.
    <br />
    Currently expanding my skills in <span className="purple">Data Structures & Algorithms</span> and <span className="purple">DevOps</span> practices.
  </p>
  
  <p>
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Reading Tech Blogs
    </li>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"{" "}
  </p>
  <footer className="blockquote-footer">Ram</footer>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
