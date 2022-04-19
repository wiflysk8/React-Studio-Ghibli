import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="c-header">
    <nav className='c-navigation'> 
    <img onClick={goBack} className='c-logo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/28f42b18-e0db-41f1-8634-e625217a3eba/d7bidrs-a81713a0-1829-46db-9b70-5a340d81d2c2.png' alt='logo'/>   
    <Link className='c-nav__link' to="/"><h2>Home</h2></Link>
    <Link className='c-nav__link' to="/films"><h2>Films</h2></Link>
    <Link className='c-nav__link' to="/about"><h2>About</h2></Link>
    </nav> 
    </div>  
  )
}

export default Header