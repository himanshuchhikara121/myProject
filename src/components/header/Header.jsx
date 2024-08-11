import React from 'react';
import css from './Header.module.css';
import logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const performSearch = (event) => {
    if (event.key === 'Enter') {
      const searchInput = document.getElementById('search-input').value.toLowerCase();
      const sections = {
        'home': '#home',
        'brands': '#brands',
        'try on': '#try on',
        'products': '#products',
        'reviews': '#reviews',
        'contact us': '#contact us',
      };

      const targetSection = sections[searchInput];

      if (targetSection) {
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Section not found');
      }
    }
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="UrbanStyle Logo" />
        <span>UrbanStyle</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#try on">Try On</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact us">Contact Us</a></li>
          </ul>
        </div>
        <input 
          type="text" 
          id="search-input" 
          placeholder='Search...' 
          className={css.search} 
          onKeyDown={performSearch} // Call function on 'Enter' key press 
        />
        <div>
          {isAuthenticated ? (
            <button className={css.login} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          ) : (
            <button className={css.login} onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
