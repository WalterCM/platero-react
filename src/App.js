import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Pages/Dashboard';

import styles from './App.module.css';
import Accounts from './components/Pages/Accounts';
import Menu from './components/Layout/Menu';
import Transactions from './components/Pages/Transactions';

function App() {
  const app = <Dashboard />
  const app2 = <Accounts />
  const app3 = <Transactions />
  return (
    <div>
      <Menu />
      {app3}
    </div>
  );
}

export default App;
