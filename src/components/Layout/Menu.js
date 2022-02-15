
import styles from './Menu.module.css';
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import Login from '../Forms/Login';


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
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Menu;
