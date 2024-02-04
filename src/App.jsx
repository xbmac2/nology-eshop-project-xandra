import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'
import NavBar from './components/NavBar/NavBar'
import FavouritesPage from './pages/FavouritesPage/FavouritesPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartContextProvider from './context/CartContextProvider'
import Footer from './components/Footer/Footer'
import OverFooterWrapper from './containers/OverFooterWrapper/OverFooterWrapper'

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>

      <OverFooterWrapper>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/product/:id" element={<ProductPage />}/>
      </Routes>

      </OverFooterWrapper>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
