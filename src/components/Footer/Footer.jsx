import React,{useContext} from "react";
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {
  const {theme} = useContext(ThemeContext)

  return <footer className={`footer-${theme}`}>Esto es mi footer</footer>;
};

export default Footer;
