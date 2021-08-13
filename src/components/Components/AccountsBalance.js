import { useState } from 'react';

import MoneyViewer from '../UI/MoneyViewer';
import styles from './AccountsBalance.module.css';

const AccountsBalance = props => {
  const [balance, setBalance] = useState(1156.5);
  let label = 'Accounts Balance'
  if (props.label) {
    label = props.label
  }
  return (
    <MoneyViewer label={label} amount={balance} />
  )
};

export default AccountsBalance;
