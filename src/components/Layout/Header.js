import { Col, Container, Image, Row } from 'react-bootstrap';

const Header = props => {
  return (
    <section className="bg-dark text-light p-5">
      <Container>
        <Row>
          <Col xs={12} lg={6} xl={5}>
            <h1 className="fw-bold">{props.title}</h1>
            <Row>
              {props.children}
            </Row>
          </Col>
          {
            props.image &&
            <Col lg={5} xl={5} className="offset-lg-1 offset-xl-2 d-flex justify-content-center">
              <Image
                className="w-75 d-none d-sm-none d-md-none d-lg-block"
                src={props.image}
              />
            </Col>
          }
        </Row>
      </Container>
    </section>
  )
};

export default Header;
