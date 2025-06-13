import React, { useState } from 'react';
import './App.css';
import Restaurants from './Components/Restaurants/Restaurants';
import Promo from './Components/Promo/Promo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Trending from './Components/Trending/Trending';

const App = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <>
      <Header></Header>
      {!showAllCards && <div className="d-flex justify-content-center mt-4">
        <Promo></Promo>
      </div> }
      <Trending showAllCards={showAllCards} setShowAllCards={setShowAllCards}/>
      {!showAllCards && <Restaurants />}
      <Footer showAllCards={showAllCards} setShowAllCards={setShowAllCards}/>
    </>
  );
};

export default App; 