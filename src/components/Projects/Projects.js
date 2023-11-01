import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import marvel from "../../Assets/Projects/marvel.png";
import yuka from "../../Assets/Projects/yuka.png";
import vinted from "../../Assets/Projects/vinted.png";
import flaviamonteiro from "../../Assets/Projects/flaviamonteiro.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import sixt from "../../Assets/Projects/sixt.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce template"
              description="Ecommerce template page. Next.js project with authentication, stripe payment, database"
              ghLink="https://github.com/felipefarnetti/ecommercefr"
              demoLink="https://ecommercefr.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flaviamonteiro}
              isBlog={false}
              title="Flavia Monteiro - Pilates, Yoga and Massages"
              description="Client's personnal home page. Front End project using React.Js"
              ghLink="https://github.com/flaviamonteiroinstitut/flaviamonteiro"
              demoLink="https://flaviamonteiro.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sixt}
              isBlog={false}
              title="Sixt Replica"
              description="Full-Stack Replica project of Sixt Rental Car booking page and a Back office for seeing the reservations. Front-End using React.Js and Back-end using Node.Js"
              ghLink="https://github.com/felipefarnetti/sixt-front"
              demoLink="https://ffsixt.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinted}
              isBlog={false}
              title="Vinted Replica"
              description="Full-Stack Replica project of Vinted home page. Front-End using React.js and Back-End using Node.Js - Login, subscription, database, add announces, payment with stripe, photo upload, cookies"
              ghLink="https://github.com/felipefarnetti/vinted-frontend"
              demoLink="https://ffvinted.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Marvel comics"
              description="Personal webpage with characters and comics catalog using Marvel Api. Front-End using React.Js and Back-End using Node.js - Login and subscription"
              ghLink="https://github.com/felipefarnetti/marvel-front"
              demoLink="https://ffmarvel.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb mobile app Replica"
              description="Full-Stack Replica project of Airbnb mobile application. Using React Native with: Account creation, connection, user profile, map and geolocalisation, photo gallery, phone camera"
              ghLink="https://github.com/felipefarnetti/airbnb-native"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yuka}
              isBlog={false}
              title="Yuka like mobile app replica"
              description="Full-Stack mobile app that works as Yuka. Uses the 'open food facts api' to retreive information about the products. Using React native with: User creation, connection, favorites, bar-code scanner"
              ghLink="https://github.com/felipefarnetti/yuka-front"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
