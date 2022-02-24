
import { Formik } from 'formik';

import { loginRequest } from '../../store/auth-actions';

import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const login = async (values) => {
    dispatch(loginRequest(values));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={login}
    >
      {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors
      }) => (
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-sm-start justify-content-lg-end">
            <Col sm={4}>
              <Form.Control
                name="email"
                size="sm" type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                name="password"
                size="sm"
                type="password"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={2}>
              <Button size="sm" variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm;
