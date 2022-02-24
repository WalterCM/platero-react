import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Pages/Dashboard';

import styles from './App.module.css';
import Landing from './components/Pages/Landing';
import Accounts from './components/Pages/Accounts';
import Menu from './components/Layout/Menu';
import Transactions from './components/Pages/Transactions';

import { useSelector } from 'react-redux';
import { useContext } from 'react';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const landing = <Landing />
  const app1 = <Dashboard />
  const app2 = <Accounts />
  const app3 = <Transactions />
  return (
    <div>
      <Menu />
      {!isAuthenticated && <Landing />}
      {isAuthenticated && <Dashboard />};
    </div>
  );
}

export default App;
