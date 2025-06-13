import React from 'react'
import './Restaurants.css'
import { useState, useEffect } from 'react'

const Restaurants = () => {

  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([])

  const restaurantURL = import.meta.env.VITE_API_RESTAURANTS;

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setError(null);
        const response = await fetch(restaurantURL)
        if (!response.ok) {
          throw new Error(`Falha na requisição do conteúdo ${response.status}`)
        }

        const data = await response.json()
        setRestaurants(data)
      } catch (error) {
        setError(error.message)
      }
    }; fetchRestaurants()
  }, [restaurantURL])

  const cardContent = restaurants.map((restaurant) => (
  <div key={restaurant.id} className="restaurant-card d-md-flex flex-column align-items-center col-md-1 col-4">
    <img className='image-restaurant rounded-4' src={restaurant.image} alt="" />
    <p className='mt-3 text-black'>{restaurant.name}</p>
  </div>
));


  return (
    <>
      <div className="restaurants d-flex flex-column px-4 mt-5">
        <p className='trending-title fs-3 my-0'>Restaurantes Recomendados</p>
        <div className='restaurants-cards row d-flex justify-content-md-center overflow-auto flex-nowrap flex-md-wrap px-3 gap-3 mt-2'>
          {error ? <p className="text-danger">{error}</p> : cardContent}
        </div>
      </div>
    </>
)
  
}

export default Restaurants