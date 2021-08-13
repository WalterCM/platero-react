import { Col, Container, Row } from 'react-bootstrap';
import AccountCard from '../UI/AccountCard';

const Section = props => {
  return (
    <section className="bg-secondary p-5">
      <Container>
        {
          props.title &&
          <h3 className="text-light fw-bold">{props.title}</h3>
        }
        <Row className="py-3">
          {props.children}
        </Row>
      </Container>
    </section>
  )
};

export default Section;
