import MoneyViewer from '../UI/MoneyViewer';

import styles from './AccountSummary.module.css';

const AccountSummary = props => {
  return (
    <div className={styles.AccountSummary}>
      <div>{props.name}</div>
      <MoneyViewer
        label="Balance"
        amount={props.balance}
        vertical
      />
    </div>
  )
};

export default AccountSummary;
