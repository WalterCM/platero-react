import { Fragment, useState } from 'react';
import {Button, Card, Col, Container, Image, Modal, Row} from 'react-bootstrap';

import AccountCard from '../UI/AccountCard';
import Header from '../Layout/Header';
import Section from '../Layout/Section';
import styles from './Accounts.module.css';

const Accounts = props => {
  const [show, setShow] = useState(false);
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Ahorro',
      description: '',
      currency: 'PEN',
      balance: 356.5,
      type: 'S',
      bg: 'danger'
    },
    {
      id: 2,
      name: 'Cuenta corriente',
      description: '',
      currency: 'PEN',
      balance: 800.0,
      type: 'C',
      bg: 'info'
    },
    {
      id: 3,
      name: 'Cuenta 3',
      description: '',
      currency: 'PEN',
      balance: 0.0,
      type: 'W'
    }
  ]);
  const [currentAccount, setCurrentAccount] = useState({
    id: null,
    name: null,
    description: null,
    currency: null,
    balance: null,
    type: null
  })
  const types = {
    C: 'Checking Account',
    S: 'Savings',
    I: 'Investments',
    W: 'Wallet'
  }
  const showAccount = (account) => {
    setCurrentAccount(account);
    setShow(true);
  }
  const handleClose = () => setShow(false);
  const handleSave = () => {

  };
  return (
    <div>
      <Header title="Accounts"/>
      <Section>
        {accounts.map(account => {
          return (
            <Col key={account.id} xs={12} sm={12} md={6} lg={4} xl={4} className="py-1">
              <AccountCard
                onClick={() => showAccount(account)}
                name={account.name}
                balance={account.balance}
                bg={account.bg}
              />
            </Col>
          )
        })}
      </Section>
      <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
        <Modal.Header>
          <Modal.Title className={styles.AccountTitle}>
            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                {currentAccount.name}
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              Current Balance
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <h2>S/.{currentAccount.balance}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="d-flex justify-content-center">
              <b>Type</b>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <b>Color</b>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              {types[currentAccount.type]}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Button variant={currentAccount.bg} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default Accounts;
