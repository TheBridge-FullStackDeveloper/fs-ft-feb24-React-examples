import React from "react";
import Nav from "./Nav";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch' } };

const Header = () => {
  return <header className="header">
    <Nav />
    <div>
      <span>Username</span>
      <Switch {...label} defaultChecked />
      <button>Login</button>
    </div>
  </header>;
};

export default Header;
