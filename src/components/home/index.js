// import React , {useState} from 'react';
// import "../../index.css";
// import LeftSideNavBar from "./leftSideBar";
// import RightSideContent from "./rightSideContent";

// const Home = () => {

//     const [selectedItem, setSelectedItem] = useState(1);

//     const handleItemSelected = (index) => {
//       setSelectedItem(index);
//     };

//   return (
//     <div className="container">
//       <div style={{ display: "flex" }}>
//         <LeftSideNavBar onItemSelected={handleItemSelected}  />
//         <RightSideContent selectedItem={selectedItem} />
//       </div>
//     </div>
//   );
// };

// export default Home;


// Home.js
import React, { useState } from 'react';
import LeftSidebar from './leftSideBar';
import ContentArea from './rightSideContent';

const Home = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div style={{ display: 'flex' }}>
      <LeftSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <ContentArea activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  );
};

export default Home;

