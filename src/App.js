
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import Categories from './Categories';
import Flashcards from './Flashcards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/path/to/your/logo.png"
              alt="App Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Study-Fied'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
              <Nav.Link as={Link} to="/flashcards">Flashcards</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<h1 className="text-center mt-4">Welcome to Study App</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Flashcards />} />
      </Routes>
    </Router>
  );
}

export default App;