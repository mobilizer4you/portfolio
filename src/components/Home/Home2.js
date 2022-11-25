import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/baker.jpeg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learned
              something so far, I think… 🤷‍♂️
              <br />
              <br />I am passionate about programming languages like  
              <i>
                <b className="purple"> Python, JavaScript, Solidity, Swift, PHP, etc. </b>
              </i>
              <br />
              <br />
              My field of interest is not only &nbsp;
              <i>
                <b className="purple">Blockchain Technologies and Products </b> but also {" "}
                <b className="purple">
                  Web & Mobile applications related to Fintech, TeleHealth, SaaS, Fitness, etc.
                </b>
              </i>
              <br />
              <br />
              I always focus on the client's <b className="purple">happiness and product quality</b> and am also looking for 
              <i>
                <b className="purple">
                  {" "}
                  a long-term relationship and projects
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple"> As a driven developer, </b>
              </i>
              &nbsp;
              I strive to create engaging products
              <i>
                <b className="purple"> constructed with clean </b>
              </i>
              and 
              <i>
                <b className="purple"> efficient code.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to&nbsp;
              <span className="purple">
                <ButtonMailto className="purple" label="email" mailto="mailto:iamalexbaker217@gmail.com" />
              </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alexbaker217"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AlexBaker217"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alex-baker-721401258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
