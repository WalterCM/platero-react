import styles from './AccountCard.module.css';
import { Card, Container } from 'react-bootstrap';

const AccountCard = props => {
  return (
    <Card
      onClick={props.onClick}
      className={styles.Card}
    >
      <Card.Title className={"p-3 bg-" + props.bg}>
        {props.name}
      </Card.Title>
      <Card.Body>
        <Container>
          <Card.Text>Balance: S/.{props.balance}</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default AccountCard;
