import Card2 from '../UI/Card2';

import styles from './Menu.module.css';
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';


const Menu = props => {
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Platero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="">Dashboard</Nav.Link>
            <Nav.Link href="">Accounts</Nav.Link>
            <Nav.Link href="">Transactions</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Form>
              <Row className="justify-content-sm-start justify-content-lg-end">
                <Col sm={4}>
                  <Form.Control size="sm" type="email" placeholder="Enter email" />
                </Col>
                <Col sm={4}>
                  <Form.Control size="sm" type="password" placeholder="Enter password" />
                </Col>
                <Col sm={2}>
                  <Button size="sm" variant="primary" type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Menu;
