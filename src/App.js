import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link href="https://ishansharma.herokuapp.com/">
                Portfolio
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>

        <Route
            path="/"
            element={
              <Home />
            }
          />

          <Route
            path="/blogs"
            element={
              <Card
                title1="Redux for Beginners"
                imageUrl1="https://i0.wp.com/regroove.ca/wp-content/uploads/2018/07/react-redux-2.png?fit=2560%2C1440&ssl=1"
                body1="Redux is an open-source JavaScript library for managing and centralizing application state."
                title2="React-Router"
                imageUrl2="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                body2="React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application."
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
