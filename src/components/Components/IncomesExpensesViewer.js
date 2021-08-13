import styles from './IncomesExpensesViewer.module.css';
import MoneyViewer from '../UI/MoneyViewer';
import { Col, Container, Row } from 'react-bootstrap';

const IncomesExpensesViewer = props => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <MoneyViewer label="Incomes" amount={props.incomes} text="success"/>
        </Col>
        <Col>
          <MoneyViewer label="Expenses" amount={props.expenses} text="danger"/>
        </Col>
      </Row>
    </Container>
  )
};

export default IncomesExpensesViewer;
