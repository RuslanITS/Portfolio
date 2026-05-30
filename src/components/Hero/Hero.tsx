import { Button, Col, Container, Row } from "react-bootstrap";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import myPhoto from "../../assets/My-photo.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="fw-bold mb-3">Привет, я Руслан</h1>

          <h2 className="text-primary mb-4">
            <FaLaptopCode className="me-2 text-primary" />
            Frontend Developer
          </h2>

          <p className="lead">Создаю современные веб-приложения.</p>

          <Link to="/projects">
            <Button variant="primary">
              Посмотреть проекты
              <FaArrowRight className="ms-2" />
            </Button>
          </Link>
        </Col>

        <Col md={6} className="text-center">
          <img
            src={myPhoto}
            alt="Ruslan"
            className="hero-photo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;