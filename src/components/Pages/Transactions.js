
import Header from '../Layout/Header';
import Section from '../Layout/Section';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import AccountCard from '../UI/AccountCard';
import TransactionCard from '../UI/TransactionCard';

const Transactions = props => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 10.0,
      description: 'Chela',
      date: '2021-08-12',
      category: 'Comida',
      account: 'Ahorro',
      type: 'expense',
      is_paid: true
    },
    {
      id: 2,
      amount: 100.0,
      description: 'Juego',
      date: '2021-08-11',
      category: 'Comida',
      account: 'Ahorro',
      type: 'expense',
      is_paid: false
    },
    {
      id: 3,
      amount: 123.0,
      description: 'Test',
      date: '2021-08-11',
      category: 'Thingy',
      account: 'Cuenta corriente',
      type: 'expense',
      is_paid: true
    },
    {
      id: 4,
      amount: 1.0,
      description: 'test2',
      date: '2021-08-10',
      category: 'Salary',
      account: 'Ahorro',
      type: 'income',
      is_paid: true
    }
  ])
  return (
    <div>
      <Header title="Transactions"/>
      <Section>
        {transactions.map(transaction => {
          return (
            <Col key={transaction.id} xs={12} className="p-1">
              <TransactionCard
                key={transaction.id}
                amount={transaction.amount}
                description={transaction.description}
                category={transaction.category}
                account={transaction.account}
                type={transaction.type}
                is_paid={transaction.is_paid}
              />
            </Col>
          )
        })}
      </Section>
    </div>
  )
};

export default Transactions;
