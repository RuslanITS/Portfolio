import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaGraduationCap,
  FaNodeJs,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">
        About Me
      </h2>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <FaGraduationCap
                size={50}
                className="text-primary mb-3"
              />

              <h4>Education</h4>

              <p className="text-muted">КГТУ им. И. Раззакова</p>

              <p>
                Специальность:<strong> Программная инженерия</strong>.
                Дипломный проект защищён на отлично.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <FaNodeJs
                size={50}
                className="text-success mb-3"
              />

              <h4>Learning</h4>

              <p className="text-muted">Attractor School</p>

              <p>
                Изучаю Node.js и продолжаю развиваться
                в области Fullstack-разработки.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center">
            <Card.Body>
              <FaRocket
                size={50}
                className="text-danger mb-3"
              />

              <h4>Goals</h4>

              <p className="text-muted">Career Growth</p>

              <p>
                Стремлюсь стать сильным Fullstack
                Developer и участвовать в создании
                современных веб-приложений.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={10} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <p className="lead mb-0 text-center">
                Я увлечён веб-разработкой,
                постоянно изучаю новые технологии и стремлюсь
                создавать качественные, удобные и современные
                цифровые продукты.
                <strong>
                  Я открыт для новых возможностей, стажировок
                  и работы в команде, где смогу приносить пользу и расти как специалист.
                </strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;