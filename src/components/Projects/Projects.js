import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Study </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="React Study"
              description="นี้ link ที่ร่วมการเล่นในการใช้งาน React ของผมตลอดการศึกษาที่ผ่านมา"
              ghLink="https://github.com/ThanawatBundasak/app1"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
