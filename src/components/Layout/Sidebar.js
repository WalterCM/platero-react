
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import styles from './Sidebar.module.css';
import { useState } from 'react';

const Sidebar = props => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={styles.Sidebar}>
      <ProSidebar collapsed={collapsed} collapsedWidth="0px">
        <Menu iconShape="square" popperArrow>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Categories</MenuItem>
          <MenuItem>Accounts</MenuItem>
          <MenuItem>Transactions</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  )
};

export default Sidebar;
