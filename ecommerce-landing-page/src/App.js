import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import './theme.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 150 },
  ]);

  const [cart, setCart] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} onThemeSwitch={toggleTheme} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;