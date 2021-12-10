import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Dashboard = () => (
<div>

  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Heutiger Plan</Nav.Link>
      <Nav.Link href="#features">Alle Pläne</Nav.Link>
      <Nav.Link href="#pricing">Fortschritt</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div>
      <h1>Plan Name</h1>
      <Button>Starten</Button>
  </div>
  <ul>
      <li>
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Deadlift</Card.Title>
                <Card.Text>
                Trainierte Mukselgruppen:<br/>
                Equipment:
                </Card.Text>           
            </Card.Body>
        </Card>
      </li>
  </ul>

</div>

);

export default Dashboard;
