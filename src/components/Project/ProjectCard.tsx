import { Button, Card } from "react-bootstrap";
import { FaGithub, FaCode } from "react-icons/fa";
import type { Project } from "../../Type";
import "./ProjectCard.css";

type Props = { project: Project };

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="project-card h-100 border-0 shadow">
      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          <FaCode
            size={30}
            className="text-primary"
          />
        </div>

        <Card.Title className="fw-bold fs-4">{project.title}</Card.Title>

        <Card.Text className="text-muted flex-grow-1">{project.description}</Card.Text>

        <div className="d-flex gap-2 flex-wrap mb-2">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="badge bg-primary"
            >
      {tech}
    </span>
          ))}
        </div>

        <Button
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          variant="dark"
        >
          <FaGithub className="me-2" />
          View Repository
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;