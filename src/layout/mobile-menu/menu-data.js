
import React, { useState,useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import './style.css'; 

const MenuData = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };


  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  return (
    <div className={`burger-menu-wrapper active ${show && 'hidden'}`}>
      <Menu 
        isOpen={menuOpen}
        right
        customBurgerIcon={ <img src={Images.BurgerIcon} /> }
        customCrossIcon={ <img src={Images.burgerCloseIcon} /> }
        onStateChange={handleStateChange}
        width={'300px'}
      >
        <a onClick={closeMenu} className="menu-item" href="/">
          Home
        </a>
        <a onClick={closeMenu} className="menu-item" href="/about">
          About
        </a>
        <a onClick={closeMenu} className="menu-item" href="/services">
          Services
        </a>
        <a onClick={closeMenu} className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
      <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<Link to='/'><img src={Images.logo} alt="logo" /></Link>
 </div>
 <div className="hamburger-container">

    </div>
 </div>
    
     

      
    </div>
  );
};

export default MenuData;
