"use client"; // Required for React Bootstrap in Next.js 15
import React, { useState } from "react";
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
import {
  BsCpu,
  BsChatSquareText,
  BsCodeSlash,
  BsShieldLock,
  BsCheckCircle,
  BsEnvelope,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsGlobe,
  BsCode,
} from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const LandingPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="md" variant="dark" className="w-100 py-3 bg-black fixed-top">
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
            <Button
            className="px-6 py-3 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-xl hover:scale-105 transition-transform"
            size="lg"
          >
              Launch Console
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-900 text-white px-6"
      >
        <p className="text-purple-600 py-2 px-4 bg-gray-900 rounded-xl w-fit text-sm">
          🟣 POWERED BY PANAVERSITY
        </p>
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text text-center mt-4">
          Enterprise AI Agents <br /> for the Future
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="relative mt-6 w-full max-w-lg"
        >
          <input
            type="text"
            className="w-full p-4 bg-gray-700 rounded-lg border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="I can help optimize your workflows with neural networks."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-6 flex space-x-4"
        >
          <Button
            className="px-6 py-3 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-xl hover:scale-105 transition-transform"
            size="lg"
          >
            Deploy Your AI Agent
          </Button>
          <Button
            className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
            size="lg"
          >
            Watch Demo
          </Button>
        </motion.div>
      </motion.section>

      {/* AI Features Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-black text-white py-5"
        id="features"
      >
        <Container className="text-center">
          <h2 className="fw-bold display-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Powered by Advanced AI
          </h2>
          <p className="text-secondary mb-4">
            Built on cutting-edge neural architectures
          </p>
          <Row className="g-4">
            {[
              { icon: <BsCpu size={40} />, title: "Neural Networks", description: "Advanced neural architectures for complex decision making." },
              { icon: <FaRobot size={40} />, title: "Deep Learning", description: "Sophisticated deep learning models for pattern recognition." },
              { icon: <BsCode size={40} />, title: "Advanced ML", description: "Cutting-edge machine learning algorithms." },
              { icon: <BsGlobe size={40} />, title: "Global Scale", description: "Distributed AI processing across global networks." },
            ].map((feature, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-dark text-white border-0 p-3 h-100">
                    <Card.Body className="d-flex flex-column h-100 text-center">
                      <div className="text-primary mb-3">{feature.icon}</div>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text className="mt-auto">{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>

      {/* Neural Capabilities Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-black text-white py-5"
      >
        <Container className="text-center">
        <h2 className="fw-bold display-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Neural Capabilities</h2>
          <p className="text-secondary mb-4">
            Powered by next-generation artificial intelligence
          </p>
          <Row className="g-4">
            {[
              { icon: <BsCpu size={40} />, title: "Autonomous Learning", description: "Self-evolving neural networks that adapt to your business needs through reinforcement learning." },
              { icon: <BsChatSquareText size={40} />, title: "Multi-Modal Intelligence", description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding." },
              { icon: <BsCodeSlash size={40} />, title: "Cognitive Integration", description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges." },
              { icon: <BsShieldLock size={40} />, title: "Ethical AI Framework", description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment." },
            ].map((feature, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-dark text-white border-0 p-3 h-100">
                    <Card.Body className="d-flex flex-column h-100 text-center">
                      <div className="text-primary mb-3">{feature.icon}</div>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text className="mt-auto">{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-black text-white py-5"
        id="pricing"
      >
        <Container className="text-center">
        <h2 className="fw-bold display-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Choose Your Plan</h2>
          <p className="text-secondary mb-4">
            Scale your AI capabilities with our flexible pricing
          </p>
          <Row className="g-4 justify-content-center">
            {[
              {
                title: "Starter",
                price: "$499/month",
                features: [
                  "2 AI Agent Instances",
                  "Basic Neural Processing",
                  "24/7 Support",
                  "Weekly Analytics",
                  "Basic Integration Support",
                ],
              },
              {
                title: "Professional",
                price: "$999/month",
                features: [
                  "10 AI Agent Instances",
                  "Advanced Neural Networks",
                  "Priority Support",
                  "Real-time Analytics",
                  "Custom Integration",
                  "API Access",
                  "Advanced Security",
                ],
                highlight: true,
              },
              {
                title: "Enterprise",
                price: "$Custom",
                features: [
                  "Unlimited Agents",
                  "Full Neural Suite",
                  "Dedicated Support Team",
                  "Advanced Analytics Dashboard",
                  "Custom Development",
                  "Full API Access",
                  "Enterprise Security",
                  "Custom Training",
                ],
              },
            ].map((plan, index) => (
              <Col md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`bg-dark text-white border-0 p-4 h-100 shadow-sm ${
                      plan.highlight ? "shadow-lg" : ""
                    }`}
                    style={
                      plan.highlight
                        ? { background: "linear-gradient(135deg, #1E3A8A, #111827)" }
                        : {}
                    }
                  >
                    <Card.Body className="text-center d-flex flex-column h-100">
                      <h4 className="fw-bold mb-3">{plan.title}</h4>
                      <h2 className="text-white mb-3">{plan.price}</h2>
                      <hr className={plan.highlight ? "border-light" : "border-secondary"} />
                      <ul className="list-unstyled text-start gap-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="d-flex align-items-center">
                            <BsCheckCircle style={{ color: "#A020F0" }} className="me-2" /> {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={plan.highlight ? "primary" : "outline-light"}
                        className="w-100 mt-auto"
                      >
                        Get Started
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-black text-white py-5"
        id="contact"
      >
        <Container className="text-center">
          <h2 className="fw-bold display-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-secondary mb-4">
            Ready to transform your business with AI?
          </p>
          <Row className="align-items-center">
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
            <Col md={7}>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <FloatingLabel controlId="firstName" label="First Name">
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="bg-gray-900 text-light border-secondary"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel controlId="lastName" label="Last Name">
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="bg-gray-900 text-light border-secondary"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel controlId="email" label="Email Address" className="mt-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="bg-gray-900 text-light border-secondary"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="message" label="Your Message" className="mt-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="bg-gray-900 text-light border-secondary"
                  />
                </FloatingLabel>
                <Button
                  type="submit"
                  className="w-100 mt-3 border-0 text-white"
                  style={{ background: "linear-gradient(135deg, #7B1FA2, #303F9F)" }}
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Footer */}
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
};

export default LandingPage;