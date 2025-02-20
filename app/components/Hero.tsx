"use client"; // ✅ Required for React Bootstrap in Next.js 15
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { BsCpu } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
// import {BsLayers} from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsEnvelope, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white vh-100 d-flex flex-column align-items-center justify-content-center px-3">
        {/* Navbar */}
        <Navbar
          expand="md"
          variant="dark"
          className="w-100 py-3 position-absolute top-0"
        >
          <Container>
            <Navbar.Brand className="fw-bold text-warning">
              💻 Agentia World
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features" className="text-light">
                  Features
                </Nav.Link>
                <Nav.Link href="#technology" className="text-light">
                  Technology
                </Nav.Link>
                <Nav.Link href="#agents" className="text-light">
                  Agents
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-light">
                  Pricing
                </Nav.Link>
                <Nav.Link href="#contact" className="text-light">
                  Contact
                </Nav.Link>
              </Nav>
              <Button variant="primary" className="ms-3">
                Launch Console
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section Content */}
        <Container className="text-center mt-5">
          <p className="text-info mb-2">💡 POWERED BY PANAVERSITY</p>
          <h1 className="display-4 fw-bold">
            Enterprise <span className="text-primary">AI Agents</span>
            <br /> for the Future
          </h1>
        </Container>

        {/* Search Bar */}
        <div className="position-relative mt-4 w-50">
          <Form.Control
            type="text"
            className="p-3 rounded bg-dark border border-secondary text-light"
            placeholder="I can help optimize your workflows with neural networks."
          />
        </div>

        {/* Buttons */}
        <div className="mt-4 d-flex gap-3">
          <Button variant="primary" size="lg">
            Deploy Your AI Agent
          </Button>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="bg-black text-white py-5">
        <Container className="text-center">
          {/* Section Title */}
          <h2 className="text-info fw-bold display-5">
            Powered by Advanced AI
          </h2>
          <p className="text-secondary mb-4">
            Built on cutting-edge neural architectures
          </p>

          {/* Feature Cards */}
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsCpu size={40} className="text-primary mb-3" />
                  <Card.Title>Neural Networks</Card.Title>
                  <Card.Text className="mt-auto">
                    Advanced neural architectures for complex decision making.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <FaRobot size={40} className="text-primary mb-3" />
                  <Card.Title>Deep Learning</Card.Title>
                  <Card.Text className="mt-auto">
                    Sophisticated deep learning models for pattern recognition.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsCode size={40} className="text-primary mb-3" />
                  <Card.Title>Advanced ML</Card.Title>
                  <Card.Text className="mt-auto">
                    Cutting-edge machine learning algorithms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsGlobe size={40} className="text-primary mb-3" />
                  <Card.Title>Global Scale</Card.Title>
                  <Card.Text className="mt-auto">
                    Distributed AI processing across global networks.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Neural Capabilities Section */}
      <div className="bg-black text-white py-5">
        <Container className="text-center">
          {/* Section Title */}
          <h2 className="text-info fw-bold display-5">Neural Capabilities</h2>
          <p className="text-secondary mb-4">
            Powered by next-generation artificial intelligence
          </p>

          {/* Feature Cards */}
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsCpu size={40} className="text-primary mb-3" />
                  <Card.Title>Autonomous Learning</Card.Title>
                  <Card.Text className="mt-auto">
                    Self-evolving neural networks that adapt to your business
                    needs through reinforcement learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsChatSquareText size={40} className="text-primary mb-3" />
                  <Card.Title>Multi-Modal Intelligence</Card.Title>
                  <Card.Text className="mt-auto">
                    Advanced agents capable of processing text, voice, and
                    visual data for comprehensive understanding.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsCodeSlash size={40} className="text-primary mb-3" />
                  <Card.Title>Cognitive Integration</Card.Title>
                  <Card.Text className="mt-auto">
                    Seamless integration with existing systems through advanced
                    cognitive APIs and neural bridges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="bg-dark text-white border-0 p-3 h-100">
                <Card.Body className="d-flex flex-column h-100 text-center">
                  <BsShieldLock size={40} className="text-primary mb-3" />
                  <Card.Title>Ethical AI Framework</Card.Title>
                  <Card.Text className="mt-auto">
                    Built-in ethical guidelines and safety protocols ensuring
                    responsible AI deployment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-black text-white py-5">
        <Container className="text-center">
          {/* Section Title */}
          <h2 className="text-primary fw-bold display-5">Choose Your Plan</h2>
          <p className="text-secondary mb-4">
            Scale your AI capabilities with our flexible pricing
          </p>

          {/* Pricing Cards Section */}
          <Row className="g-4 justify-content-center">
            {/* Starter Plan */}
            <Col md={4}>
              <Card className="bg-dark text-white border-0 p-4 h-100 shadow-sm">
                <Card.Body className="text-center d-flex flex-column h-100">
                  <h4 className="fw-bold">Starter</h4>
                  <h2 className="text-white">
                    $499<span className="fs-6">/month</span>
                  </h2>
                  <hr className="border-secondary" />
                  <ul className="list-unstyled text-start gap-2">
                    {[
                      "2 AI Agent Instances",
                      "Basic Neural Processing",
                      "24/7 Support",
                      "Weekly Analytics",
                      "Basic Integration Support",
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <BsCheckCircle className="text-success me-2" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-light" className="w-100 mt-auto">
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Professional Plan (Highlighted) */}
            <Col md={4}>
              <Card
                className="border-0 p-4 h-100 shadow-lg text-white d-flex flex-column"
                style={{
                  background: "linear-gradient(135deg, #6A0DAD, #4B0082)",
                }}
              >
                <Card.Body className="text-center d-flex flex-column h-100">
                  <h4 className="fw-bold">Professional</h4>
                  <h2 className="text-white">
                    $999<span className="fs-6">/month</span>
                  </h2>
                  <hr className="border-light" />
                  <ul className="list-unstyled text-start gap-2">
                    {[
                      "10 AI Agent Instances",
                      "Advanced Neural Networks",
                      "Priority Support",
                      "Real-time Analytics",
                      "Custom Integration",
                      "API Access",
                      "Advanced Security",
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <BsCheckCircle className="text-light me-2" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="light" className="w-100 mt-auto">
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Enterprise Plan */}
            <Col md={4}>
              <Card className="bg-dark text-white border-0 p-4 h-100 shadow-sm">
                <Card.Body className="text-center d-flex flex-column h-100">
                  <h4 className="fw-bold">Enterprise</h4>
                  <h2 className="text-white">$Custom</h2>
                  <hr className="border-secondary" />
                  <ul className="list-unstyled text-start gap-2">
                    {[
                      "Unlimited Agents",
                      "Full Neural Suite",
                      "Dedicated Support Team",
                      "Advanced Analytics Dashboard",
                      "Custom Development",
                      "Full API Access",
                      "Enterprise Security",
                      "Custom Training",
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <BsCheckCircle className="text-success me-2" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-100 mt-auto">
                    Contact Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-black text-white py-5">
        <Container>
          {/* Section Title */}
          <h2 className="text-primary fw-bold text-center display-5">
            Get in Touch
          </h2>
          <p className="text-secondary text-center mb-4">
            Ready to transform your business with AI?
          </p>

          <Row className="align-items-center">
            {/* Contact Information */}
            <Col md={5} className="mb-4 mb-md-0">
              <h5 className="fw-bold">Contact Information</h5>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center">
                  <BsEnvelope className="me-2 text-primary" />
                  <span>contact@agentiaworld.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <BsGlobe className="me-2 text-primary" />
                  <span>www.agentiaworld.com</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <a href="#" className="text-white">
                    <BsLinkedin size={20} />
                  </a>
                  <a href="#" className="text-white">
                    <BsTwitter size={20} />
                  </a>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col md={7}>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <FloatingLabel
                      controlId="firstName"
                      label="First Name"
                      className="text-white"
                    >
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        className="bg-dark text-white border-secondary"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="lastName"
                      label="Last Name"
                      className="text-white"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        className="bg-dark text-white border-secondary"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel
                  controlId="email"
                  label="Email Address"
                  className="mt-3 text-white"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="bg-dark text-white border-secondary"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="message"
                  label="Your Message"
                  className="mt-3 text-white"
                >
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    className="bg-dark text-white border-secondary"
                  />
                </FloatingLabel>

                <Button
                  className="w-100 mt-3 bg-gradient border-0"
                  style={{
                    background: "linear-gradient(135deg, #6A0DAD, #4B0082)",
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="bg-black text-white py-4">
        <Container>
          <Row className="gy-4">
            {/* Brand Section */}
            <Col md={3}>
              <h5 className="fw-bold d-flex align-items-center">
                <span className="me-2">🟣</span> Agentia World
              </h5>
              <p className="text-secondary small">
                Next-generation AI agents powering the future of enterprise
                intelligence.
              </p>
              {/* Social Icons */}
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <BsGithub size={20} />
                </a>

                <a href="#" className="text-white">
                  <BsLinkedin size={20} />
                </a>
                <a href="#" className="text-white">
                  <BsTwitter size={20} />
                </a>
              </div>
            </Col>

            {/* Product Links */}
            <Col md={3}>
              <h6 className="fw-bold">Product</h6>
              <ul className="list-unstyled text-secondary small">
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    API
                  </a>
                </li>
              </ul>
            </Col>

            {/* Company Links */}
            <Col md={3}>
              <h6 className="fw-bold">Company</h6>
              <ul className="list-unstyled text-secondary small">
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>

            {/* Legal Links */}
            <Col md={3}>
              <h6 className="fw-bold">Legal</h6>
              <ul className="list-unstyled text-secondary small">
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Compliance
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Divider & Copyright */}
          <hr className="border-secondary mt-4" />
          <p className="text-center text-secondary small">
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}
