import React from 'react';
import { Link } from 'react-router-dom';
import HeaderShop from '../HeaderShop/HeaderShop';
import './Header.css'

const Header = () => {
  return (
      <header className="header container">
          <div className="wrapper header-wrapper ">
             <Link className="header-item" to="/">Game store</Link>
             <div className="header-item">
                <HeaderShop/>
             </div>
          </div>

      </header>
  );
};

export default Header;
