import { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import ProjectCard from "../../components/Project/ProjectCard";
import type { Project } from "../../Type";
import ProjectModal from "../../components/Project/ProjectModal/ProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "FoodOrderApp",
      description: "Приложение для заказа еды с удобным пользовательским интерфейсом.",
      technology: ["React", "TypeScript"],
      githubUrl: 'https://github.com/RuslanITS/FoodOrderApp.git'
    },
    {
      id: 2,
      title: "ConstructorBurgerr",
      description: "Конструктор бургеров с возможностью выбора ингредиентов.",
      technology: ["React", "TypeScript"],
      githubUrl: 'https://github.com/RuslanITS/ConstructorBurgerr.git'
    },
    {
      id: 3,
      title: "FindObjectGame",
      description: "Мини-игра на внимательность и поиск объектов.",
      technology: ["React", "TypeScript"],
      githubUrl: 'https://github.com/RuslanITS/ConstructorBurger.git'
    },
    {
      id: 4,
      title: "Todo-List",
      description: "Обычный Todo-list с добавлением задач",
      technology: ["React", "CSS"],
      githubUrl: 'https://github.com/RuslanITS/ConstructorBurger.git'
    },
    {
      id: 5,
      title: "Poker-5Card",
      description: "Покер на пять карт с игровой логикой.",
      technology: ["React", "CSS"],
      githubUrl: 'https://github.com/RuslanITS/Poker-5card.git'
    },
    {
      id: 6,
      title: 'Ball-Lottery',
      description: 'Лотерея с генерацией случайных чисел.',
      technology: ["React", "TypeScript"],
      githubUrl: 'https://github.com/RuslanITS/Ball-lottery.git'
    },
    {
      id: 7,
      title: "React-Layout",
      description: "Практика адаптивной верстки и работы с компонентами.",
      technology: ["React", "CSS"],
      githubUrl: 'https://github.com/RuslanITS/React-Layout.git'
    },
    {
      id: 8,
      title: "Chessboard",
      description: "Интерактивная шахматная доска.",
      technology: ["React"],
      githubUrl: 'https://github.com/RuslanITS/Chessboard.git'
    },
    {
      id: 9,
      title: "FoodOrderApp",
      description: "Приложение для заказа еды с удобным пользовательским интерфейсом.",
      technology: ["React", "TypeScript"],
      githubUrl: 'https://github.com/RuslanITS/FoodOrderApp.git'
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const addProject = (
    project: Project
  ) => {
    setProjects((prev) => [
      ...prev,
      project,
    ]);
  };

  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm mb-5">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="fw-bold">My Project</h3>

              <p className="text-muted mb-0">
                Здесь собраны {projects.length} проектов,
                которые я разработал в процессе обучения и практики.
              </p>
            </Col>

            <Col
              md={4}
              className="text-md-end mt-3 mt-md-0"
            >
              <Button
                variant="success"
                size="lg"
                onClick={handleShow}
              >
                + Add Project
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <ProjectModal
        show={showModal}
        handleClose={handleClose}
        onAddProject={addProject}
      />

      <Row className="g-4">
        {projects.map((project) => (
          <Col
            key={project.id}
            md={6}
            lg={4}
          >
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;