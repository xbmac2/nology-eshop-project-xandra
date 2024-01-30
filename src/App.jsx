import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { getAllProducts } from './services/products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'
import NavBar from './components/NavBar/NavBar'
import FavouritesPage from './pages/FavouritesPage/FavouritesPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartContextProvider from './context/CartContextProvider'

function App() {
  
  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  return (
    <BrowserRouter>
    <CartContextProvider>

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/product/:id" element={<ProductPage />}/>
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
