import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import MonthPicker from '../UI/MonthPicker';
import IncomesExpensesViewer from '../Components/IncomesExpensesViewer';
import AccountsBalance from '../Components/AccountsBalance';

import styles from './Dashboard.module.css';
import AccountCard from '../UI/AccountCard';
import Header from '../Layout/Header';
import Section from '../Layout/Section';

const Dashboard = props => {
  const [month, setMonth] = useState();
  const [favoriteAccounts, setFavoriteAccounts] = useState([
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

  const onMonthPickHandler = () => {

  };

  return (
    <div className={styles.Dashboard}>
      <Header
        title="Dashboard"
        image="https://www.smtm.co/assets/lp-carousel_man_bag_money-22b59357dfeab5b9febdeacb9b70b7c9.png"
      >
        <MonthPicker onPick={onMonthPickHandler} className="my-3" />
        <AccountsBalance />
        <IncomesExpensesViewer />
      </Header>

      <Section title="Accounts">
        {favoriteAccounts.map(account => {
          return (
            <Col key={account.id} xs={12} sm={12} md={6} lg={4} xl={4} className="py-1">
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

export default Dashboard;
