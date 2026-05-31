import { useState } from "react";
import { Card, Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { FaReact, FaNodeJs, FaGitAlt, FaServer, FaBolt, FaFileCode, FaDownload } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiTypescript, SiJavascript, SiBootstrap, SiPostgresql, SiExpress, SiAxios, SiHtml5, SiCss, } from "react-icons/si";
import './skill.css'
import type { Skill } from "../../Type";

const Skills = () => {
  const [skills] = useState<Skill[]>([
    {id: 1, icon: <FaReact />, title: "React", level: "Frontend Development", category: "frontend"},
    {id: 2, icon: <SiTypescript />, title: "TypeScript", level: "Typed JavaScript", category: "frontend"},
    {id: 3, icon: <SiJavascript />, title: "JavaScript", level: "Frontend Development", category: "frontend"},
    {id: 4, icon: <FaNodeJs />, title: "Node.js", level: "Backend Development", category: "backend"},
    {id: 5, icon: <SiBootstrap />, title: "Bootstrap", level: "UI Framework", category: "frontend"},
    {id: 6, icon: <FaGitAlt />, title: "Git", level: "Version Control", category: "tools"},
    {id: 7, icon: <SiAxios />, title: "Axios", level: "HTTP Requests", category: "frontend"},
    {id: 8, icon: <SiPostgresql />, title: "PostgreSQL", level: "Database", category: "backend"},
    {id: 9, icon: <SiExpress />, title: "Express.js", level: "Backend Framework", category: "backend"},
    {id: 10, icon: <SiHtml5 />, title: "HTML5", level: "Markup", category: "frontend"},
    {id: 11, icon: <SiCss />, title: "CSS3", level: "Styling", category: "frontend"},
    {id: 12, icon: <DiSass />, title: "SASS", level: "Styling", category: "frontend"},
    {id: 13, icon: <FaServer />, title: "REST API", level: "API Integration", category: "backend"},
    {id: 14, icon: <FaBolt />, title: "Async/Await", level: "Asynchronous JavaScript", category: "tools"},
    {id: 15, icon: <FaFileCode />, title: "JSON", level: "Data Exchange Format", category: "tools"},
    {id: 16, icon: <FaDownload />, title: "Fetch API", level: "HTTP Requests", category: "frontend"},
    {id: 17, icon: <FaReact />, title: "React Router", level: "SPA Navigation", category: "frontend"},
    {id: 18, icon: <FaGitAlt />, title: "GitHub", level: "Code Hosting", category: "tools"},
    {id: 19, icon: <FaNodeJs />, title: "NPM", level: "Package Manager", category: "tools"},
  ]);
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter(
        (skill) => skill.category === filter
      );

  return (
    <Container className="py-5">
      <h1 className="text-center fw-bold mb-3">
        My Skills
      </h1>

      <p className="text-center text-muted mb-5">
        Технологии и инструменты, которые я использую
        в своих проектах.
      </p>

      <div className="d-flex justify-content-center mb-5">
        <ButtonGroup>
          <Button
            variant={
              filter === "all"
                ? "dark"
                : "outline-dark"
            }
            onClick={() => setFilter("all")}
          >
            All
          </Button>

          <Button
            variant={
              filter === "frontend"
                ? "primary"
                : "outline-primary"
            }
            onClick={() =>
              setFilter("frontend")
            }
          >
            Frontend
          </Button>

          <Button
            variant={
              filter === "backend"
                ? "success"
                : "outline-success"
            }
            onClick={() =>
              setFilter("backend")
            }
          >
            Backend
          </Button>

          <Button
            variant={
              filter === "tools"
                ? "warning"
                : "outline-warning"
            }
            onClick={() =>
              setFilter("tools")
            }
          >
            Tools
          </Button>
        </ButtonGroup>
      </div>

      <Row className="g-4">
        {filteredSkills.map((skill) => (
          <Col
            key={skill.id}
            md={6}
            lg={4}
          >
            <Card className="skill-card h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <div
                  className="mb-3 text-primary c-body"
                >
                  {skill.icon}
                </div>

                <Card.Title>
                  {skill.title}
                </Card.Title>

                <Card.Text className="text-muted">
                  {skill.level}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;