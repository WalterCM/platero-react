
import styles from './Menu.module.css';
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import LoginForm from '../Forms/Login';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import { refreshRequest } from '../../store/auth-actions';
import { authActions } from '../../store/auth-slice';


const Menu = props => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  useEffect(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    let check_refresh = false;

    console.log('access: ', access)
    // We check if access token has expired
    if (access) {
      const decoded_access = jwt_decode(access);
      console.log('decoded_access: ', decoded_access)
      if (decoded_access.exp >= new Date() / 1000) {
        console.log('ACCESS NOT EXPIRED')
        // Login with current credentials
        dispatch(authActions.login({ access }));
      } else {
        console.log('ACCESS EXPIRED')
        // Refresh token is needed because the access token has expired
        check_refresh = true;
      }
    } else {
      check_refresh = true;
    }

    // If needed, we also check if refresh token has expired
    console.log('check_refresh: ', check_refresh)
    if (!check_refresh) {
      return;
    }
    console.log('refresh: ', refresh)
    if (refresh) {
      console.log('YES REFRESH')
      const decoded_refresh = jwt_decode(refresh)
      if (decoded_refresh.exp >= new Date() / 1000) {
        console.log('REFRESH NOT EXPIRED')
        // Request new access token
        dispatch(refreshRequest({refresh: refresh}))
      } else {
        console.log('REFRESH EXPIRED')
        // No further action is required and the user will need to login using the login form
      }
    } else {
      console.log('NO REFRESH, LOGGING OUT')
      dispatch(authActions.logout());
    }
  }, []);

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
