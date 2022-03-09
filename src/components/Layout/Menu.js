
import styles from './Menu.module.css';
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import LoginForm from '../Forms/Login';
import { useSelector } from 'react-redux';


const Menu = props => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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
          {!isAuthenticated &&
            <Nav className="ms-auto">
              <LoginForm />
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Menu;
