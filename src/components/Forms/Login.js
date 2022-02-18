import { Formik } from 'formik';

import { Button, Col, Form, Row } from 'react-bootstrap';

import { API_URL } from '../../config';

const Login = () => {
  const login = async (values) => {
    try {
      const response = await fetch(API_URL + 'api/users/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      })
      const data = response.json();
      console.log('data: ', data)
    } catch (errors) {
      console.log('ERROR');
    }
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

export default Login;
