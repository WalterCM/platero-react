import styles from './TransactionCard.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const TransactionCard = props => {
  return (
    <Card
      className={styles.Card}
    >
      <Card.Body>
        <Container>
          <Row>
            <Col xs={6} sm={7} md={8} lg={9} xl={10} className={styles.TransactionName}>
              {props.description}
            </Col>
            <Col xs={4} sm={3} md={2} lg={2} xl={1} className={styles.TransactionCategory}>
              {props.category}
            </Col>
            <Col xs={2} sm={2} md={2} lg={1} xl={1}>
              <Row className={styles.TransactionAccount}>
                {props.account}
              </Row>
              <Row className={styles.TransactionAmount}>
                S/.{props.amount}
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default TransactionCard;
