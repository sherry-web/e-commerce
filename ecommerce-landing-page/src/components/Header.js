import React from 'react';

const Header = ({ cartCount, onThemeSwitch }) => {
  return (
    <header>
      <h1>E-commerce Store</h1>
      <button onClick={onThemeSwitch}>Switch Theme</button>
      <div>
        <span>Cart: {cartCount}</span>
      </div>
    </header>
  );
};

export default Header;