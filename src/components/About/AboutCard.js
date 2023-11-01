import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felipe Farnetti </span>
            from <span className="purple"> Paris, France.</span>
            <br /> Accomplished IT manager with a history of leadership at a
            renowned business school, responsible for optimizing campus-wide
            technology. Certified graduate of a notable web development
            bootcamp, skilled in HTML, CSS, and JavaScript (React.js and Node.js
            + Next.js). Adept at cross-functional collaboration and IT
            infrastructure enhancement. Ready to apply expertise in dynamic
            solutions and technical leadership.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photograph
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            “If you can imagine it, you can achieve it. If you can dream it, you
            can become it.”
          </p>
          <footer className="blockquote-footer">William Arthur Ward</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
