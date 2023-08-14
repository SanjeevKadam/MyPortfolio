import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjeev Kumar </span>
            from <span className="purple"> Telangana, India.</span>
            <br /> I did my bachelor's degree in electronics and communication engineering.
            <br />
            Additionally, I am currently working as a software developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjeev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
