import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from "../../Assets/Projects/chatapp.png";
import budgetTracker from "../../Assets/Projects/budget tracker.png";
import secondBrain from "../../Assets/Projects/secondBrain.png";
import hospitalManagement from "../../Assets/Projects/hospitalmanagement.png";
import fitnessPlan from "../../Assets/Projects/Fitnessplan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              title="Chat Application"
              description="Basic chat app implemented using WebSocket for real-time communication. Built with React frontend Uses Socket.io for bidirectional communication."
              ghLink="https://github.com/sairamanuja/Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              title="Budget Tracker"
              description="A comprehensive personal finance management application. Track income,expenses,and savings with interactive charts and analytics. Features include expense categorization, budget planning, and financial goal setting."
              ghLink="https://github.com/sairamanuja/budget-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondBrain}
              title="Second Brain"
              description="A powerful knowledge management system that helps organize thoughts and information. Features include note-taking, task management, and knowledge linking. Built with modern web technologies for seamless productivity."
              ghLink="https://github.com/sairamanuja/Second-Brain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitalManagement}
              title="Hospital Management System"
              description="A full-stack hospital management solution with features for patient records, appointment scheduling, and staff management. Includes both frontend and backend components for comprehensive healthcare facility management."
              ghLink="https://github.com/sairamanuja/hospital_management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessPlan}
              title="Fitness Plan Generator"
              description="An AI-powered fitness planning application that generates personalized workout and nutrition plans. Features include exercise libraries, progress tracking, and customizable fitness goals based on user preferences and fitness levels."
              ghLink="https://github.com/sairamanuja/Fitness-Plan-genrator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
