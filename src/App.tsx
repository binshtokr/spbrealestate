import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col, Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import esgBild from "./assets/ESG_Bild.png";
import './App.css';

const HomePage: React.FC = () => {
  const [headerColor, setHeaderColor] = useState<string>("rgba(255, 255, 255, 0.8)");
  const [footerColor, setFooterColor] = useState<string>("rgba(0, 0, 0, 0.7)");
  const [cardBgColor, setCardBgColor] = useState<string>("rgba(255, 255, 255, 0.8)");

  // Dynamische Farbanpassung basierend auf dem Hintergrundbild
  useEffect(() => {
    const adjustColors = () => {
      setHeaderColor("rgba(255, 255, 255, 0.8)");
      setFooterColor("rgba(0, 0, 0, 0.7)");
      setCardBgColor("rgba(255, 255, 255, 0.85)");
    };
    adjustColors();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light py-4" style={{
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url(${esgBild})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      {/* Navbar mit Hamburger-Menü */}
      <Navbar expand="lg" style={{ backgroundColor: headerColor }} fixed="top" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand href="/">Платформа недвижимости</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/services">
                <i className="bi bi-house-door-fill"></i> Сервисы
              </Nav.Link>
              <Nav.Link href="/about">
                <i className="bi bi-info-circle-fill"></i> О нас
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 mt-5 pt-5">
        <section className="text-center mb-5">
          <h2 className="h3 mb-3">Добро пожаловать на платформу недвижимости!</h2>
          <p className="text-muted mb-4">Упростите процесс поиска, покупки и регистрации недвижимости.</p>
          <Button variant="primary">Начать поиск</Button>
        </section>

        <section>
          <Container>
            <Row className="g-4">
              <Col md={4}>
                <Card className="card-hover" style={{ backgroundColor: cardBgColor }}>
                  <Card.Body className="text-center">
                    <i className="bi bi-house-door-fill" style={{ fontSize: "3rem", color: "#007bff" }}></i>
                    <Card.Title className="mt-3">Поиск недвижимости</Card.Title>
                    <Card.Text>Используйте наш инструмент для поиска объектов, соответствующих вашим критериям.</Card.Text>
                    <Button variant="secondary">Узнать больше</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="card-hover" style={{ backgroundColor: cardBgColor }}>
                  <Card.Body className="text-center">
                    <i className="bi bi-credit-card-fill" style={{ fontSize: "3rem", color: "#007bff" }}></i>
                    <Card.Title className="mt-3">Покупка онлайн</Card.Title>
                    <Card.Text>Завершите сделку полностью онлайн и получите консультацию по ипотеке.</Card.Text>
                    <Button variant="secondary">Узнать больше</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="card-hover" style={{ backgroundColor: cardBgColor }}>
                  <Card.Body className="text-center">
                    <i className="bi bi-file-earmark-check-fill" style={{ fontSize: "3rem", color: "#007bff" }}></i>
                    <Card.Title className="mt-3">Регистрация собственности</Card.Title>
                    <Card.Text>Мы поможем вам зарегистрировать ваше имущество быстро и удобно.</Card.Text>
                    <Button variant="secondary">Узнать больше</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="p-4 text-white text-center" style={{
        backgroundColor: footerColor, position: "fixed", left: "0",
        bottom: "0", width: "100%"
      }}>
        <p className="mb-0">© 2025 Платформа недвижимости</p>
      </footer>
    </div>
  );
};

const ServicesPage: React.FC = () => (
  <div className="container py-4">
    <h2 className="h4 mb-4">Наши Сервисы</h2>
    <ul className="list-unstyled text-muted">
      <li>Поиск недвижимости</li>
      <li>Покупка и оформление онлайн</li>
      <li>Регистрация собственности</li>
      <li>Консультации по ипотеке</li>
    </ul>
    <div className="mt-4">
      <Link to="/" className="btn btn-link">Вернуться на главную</Link>
    </div>
  </div>
);

const AboutPage: React.FC = () => (
  <div className="container py-4">
    <h2 className="h4 mb-4">О нас</h2>
    <p className="text-muted">
      Платформа недвижимости — это цифровая платформа, созданная для упрощения операций с недвижимостью, делая их удобными и быстрыми.
    </p>
    <div className="mt-4">
      <Link to="/" className="btn btn-link">Вернуться на главную</Link>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
