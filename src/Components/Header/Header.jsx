import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react'

const Header = () => {

  const [user, setUSer] = useState('');
  const [error, setError] = useState(null)

  const userURL = import.meta.env.VITE_API_USER

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null)
        const response = await fetch(userURL)
        if (!response.ok) {
          throw new Error(`Erro na requisição de usuário ${response.status}`)
        }

        const data = await response.json()
        setUSer(data)
      } catch (error) {
        setError(error.message)
      }
    }; fetchUser()
  },[userURL])

  return (
    <>
      <div className='header col-12 d-flex justify-content-between align-items-center px-4 pt-4'>
        {error ? <p className="text-danger">{error}</p> :
          <div className='d-flex flex-column'>
            <p className='header-text fs-4'>Olá {user.name}</p>
            <p className='header-text wallet fs-6 pb-4'>R${user.saldo}</p>
          </div>
        }
        <p className='city fs-4'>Taquara-RS</p>
      </div>
    </>
  )
}

export default Header