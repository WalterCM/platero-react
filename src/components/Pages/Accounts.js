import { Fragment, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import AccountCard from '../UI/AccountCard';
import Header from '../Layout/Header';
import Section from '../Layout/Section';

const Accounts = props => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Ahorro',
      balance: 356.5,
      bg: 'danger'
    },
    {
      id: 2,
      name: 'Cuenta corriente',
      balance: 800.0,
      bg: 'info'
    },
    {
      id: 3,
      name: 'Cuenta 3',
      balance: 0.0
    }
  ]);
  return (
    <div>
      <Header title="Accounts"/>
      <Section>
        {accounts.map(account => {
          return (
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="py-1">
              <AccountCard
                name={account.name}
                balance={account.balance}
                bg={account.bg}
              />
            </Col>
          )
        })}
      </Section>
    </div>
  )
};

export default Accounts;
