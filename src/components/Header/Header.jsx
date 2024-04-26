import React,{useContext} from "react";
import Nav from "./Nav";
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../context/ThemeContext'
import { UserContext } from '../../context/UserContext'



const label = { inputProps: { 'aria-label': 'Switch' } };

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username,updateUsername} = useContext(UserContext);

  return <header className={`header-${theme}`}>
    <Nav />
    <div>
      <span>{username}</span>
      <Switch {...label} defaultChecked onClick={toggleTheme}/>
      {username?<button onClick={()=>updateUsername("")}>Logout</button>:null}
    </div>
  </header>;
};

export default Header;
