import styles from './AccountCard.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const TransactionCard = props => {
  return (
    <Card
      className={styles.Card}
    >
      <Card.Title className="p-3">
        {props.description}
      </Card.Title>
      <Card.Body>
        <Container>
          <Card.Text>
            <Row>
              <Col>
                {props.category}|{props.account}
              </Col>
              <Col>
                S/.{props.amount}
              </Col>
            </Row>
          </Card.Text>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default TransactionCard;
