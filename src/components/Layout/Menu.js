
import styles from './Menu.module.css';
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import LoginForm from '../Forms/Login';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Menu = props => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Platero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink to="">Dashboard</NavLink>
            <NavLink to="/accounts">Accounts</NavLink>
            <NavLink to="/transactions">Transactions</NavLink>
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
