import React, { useState, useEffect } from 'react';
import './Trending.css';

const Trending = ({ showAllCards, setShowAllCards }) => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const restaurantNames = {
    "1": "Xis do Vini",
    "2": "Sal e Pimenta",
    "3": "Outback",
    "4": "Santo Grill",
    "5": "Pizza Hut",
    "6": "Burger King",
  };

  const handleVerTodosClick = () => {
    setShowAllCards(!showAllCards);
  };

  const foodsURL = import.meta.env.VITE_API_FOODS

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(foodsURL);
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        setAllProductsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  },[foodsURL]);

  const trendingCards = allProductsData.slice(0, 5);

  const RenderCardContent = ({ name, price, time, delivery, image }) => {

    return (
      <div className="trending-card d-flex flex-column justify-content-between col-md-2 col-10">
        <img className='test' src={image || 'https://placehold.co/150x150/cccccc/000000?text=Sem+Imagem'} alt={name} />
        <div className="card-bottom d-flex justify-content-between align-items-center py-2">
          <div className="card-left px-3">
            <p className='my-0 grey'>Info:</p>
            <p className='my-0'>R${price ? price.toFixed(2) : 'N/A'}</p>
            <p className='my-0 bottomText'>{name || 'N/A'}</p>
          </div>
          <div className="divisor"></div>
          <div className="card-right px-3">
            <p className='my-0 grey'>Frete:</p>
            <p className='my-0'>R${delivery ? delivery.toFixed(2) : 'N/A'}</p>
            <p className='my-0 bottomText'>{time || 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  };

  const RenderAllCardContent = ({ name, price, time, delivery, image, restaurantId }) => {
    const restaurantName = restaurantNames[restaurantId] || "Restaurante Desconhecido";

    return (
      <div className="col-8 col-lg-3 mb-4 ms-1 me-1">
        <div className="foodCard d-flex flex-column align-items-center">
          <img src={image || 'https://placehold.co/200x200/cccccc/000000?text=Sem+Imagem'} className="imagemTeste" alt={name} />
          <p className="pt-3 pb-0 fs-2 text-white">{restaurantName}</p>
          <div className="cardDivision d-flex justify-content-evenly w-100">
            <div className="cardLeft d-flex flex-column">
              <p className="cardTitle my-0 text-secondary fs-4">Info:</p>
              <p className="foodCost my-0 fs-3 text-white">R${price ? price.toFixed(2) : 'N/A'}</p>
              <p className="lunchName my-0 fs-5 text-white">{name || 'N/A'}</p>
            </div>
            <div className="divider"></div>
            <div className="cardRight d-flex flex-column">
              <p className="cardTitle my-0 text-secondary fs-4">Frete:</p>
              <p className="timeCost my-0 fs-3 text-white">R${delivery ? delivery.toFixed(2) : 'N/A'}</p>
              <p className="foodTime my-0 fs-5 text-white">{time || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="text-center mt-5">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Erro: {error}. Não foi possível carregar os produtos.</div>;
  }

  return (
    <>
      {!showAllCards ? (
        <div className="trending d-flex flex-column px-4 mt-5">
          <div className="trending-top d-flex justify-content-between align-items-center">
            <p className='trending-title fs-3 my-0'>Em Alta</p>
            <p
              className='trending-title fs-3 my-0'
              onClick={handleVerTodosClick}
              style={{ cursor: 'pointer' }}
            >
              Ver todos
            </p>
          </div>
          <div className="trending-list row px-5 d-flex justify-content-md-center justify-content-start overflow-auto flex-nowrap flex-md-wrap gap-3 pb-3 mt-2">
            {trendingCards.map(card => (
              <RenderCardContent
                key={card.id}
                name={card.name}
                price={card.price}
                time={card.time}
                delivery={card.delivery}
                image={card.image}
                restaurantId={card.restaurantId}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="row g-0 d-flex justify-content-evenly pt-5">
          {allProductsData.map(card => (
            <RenderAllCardContent
              key={card.id}
              name={card.name}
              price={card.price}
              time={card.time}
              delivery={card.delivery}
              image={card.image}
              restaurantId={card.restaurantId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Trending;