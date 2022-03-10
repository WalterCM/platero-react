import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import Menu from './components/Layout/Menu';
import Dashboard from './components/Pages/Dashboard';
import Landing from './components/Pages/Landing';
import Accounts from './components/Pages/Accounts';
import Transactions from './components/Pages/Transactions';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <div>
      <Menu />
      {!isAuthenticated && <Landing />}
      {isAuthenticated &&
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
