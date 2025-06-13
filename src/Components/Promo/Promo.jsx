import React from 'react'
import './Promo.css'
import imagemPromo from '../assets/teste.png'

const Promo = () => {
  return (
    <>
      <div className='promo col-10 col-md-3 d-flex flex-column align-items-center justify-content-center text-white px-2 py-3 rounded-4'>
        <p className='fs-3'>Promoção do Dia</p>
        <div className='d-flex align-items-center justify-content-center'>
          <p className='fs-4'> X-Salada<br />Batata Frita G<br />Coca Lata</p>
          <img className='burgerImage' src={imagemPromo} alt="Combo da Promoção" />
        </div>
        <div className='fs-4 btn-value px-2 py-1 rounded'>Apenas R$39,90</div>
      </div>
    </>
  )
}

export default Promo