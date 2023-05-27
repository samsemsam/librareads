import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find your Book.</h2>
          <br />
          <p className="header-text fs-18 fw-3"></p>
          <SearchBar />
        </div>
      </header>
    </div >
  );
};

export default Header;
