// Home.js
import React, { useState } from 'react';
import LeftSidebar from './leftSideBar';
import ContentArea from './rightSideContent';
import Navbar from './navbar';

const Home = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
      <div className="container" style={{ display: 'flex' }}>
        <LeftSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <ContentArea activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

  );
};

export default Home;

