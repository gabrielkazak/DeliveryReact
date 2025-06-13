import React from 'react';
import './Footer.css';

const Footer = ({ showAllCards, setShowAllCards }) => {

  const handleVerTodosClick = () => {
    if (showAllCards) {
      setShowAllCards(!showAllCards);
    }
    else {
      return
    }
  };

  return (
    <>
      <div className="footer col-12">
        <p className='fs-2' onClick={handleVerTodosClick} style={{ cursor: 'pointer' }}>Home</p>
      </div>
    </>
  );
};

export default Footer;
