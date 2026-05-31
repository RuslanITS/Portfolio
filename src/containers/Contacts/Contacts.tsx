import {
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";

import {
  FaEnvelope,
  FaTelegram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contacts.css";

const Contacts = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center fw-bold mb-3">
        Мои контакты.
      </h1>

      <p className="text-center text-muted mb-5">
        Вы можете со мной связатся и получить подробную информацию.
      </p>

      <Row className="g-4 justify-content-center">
        <Col md={6} lg={3}>
          <Card className="contact-card h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <FaEnvelope
                size={40}
                className="text-primary mb-3"
              />

              <h5>Email</h5>

              <a
                href="mailto:ruslan.code.it@gmail.com"
                className="contact-link"
              >
                ruslan.code.it@gmail.com
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="contact-card h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <FaTelegram
                size={40}
                className="text-info mb-3"
              />

              <h5>Telegram</h5>

              <a
                href="https://t.me/Borzot1a"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                @Borzot1a
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="contact-card h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <FaGithub
                size={40}
                className="mb-3"
              />

              <h5>GitHub</h5>

              <a
                href="https://github.com/RuslanITS"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                RuslanITS
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="contact-card h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <FaMapMarkerAlt
                size={40}
                className="text-danger mb-3"
              />

              <h5>Location</h5>

              <p className="mb-0">
                Bishkek, Kyrgyzstan
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;