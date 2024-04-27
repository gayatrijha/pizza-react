import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>pizza</p>
    </header>
  );
};

export default Header;
