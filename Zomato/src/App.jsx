import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartProvider } from './contexts/CartContext'
function App() {
  return (
    <>
    <CartProvider>
      <Header />
          <BrowserRouter>
            <Routes>
              <Route path = "/" element={<Body />}  />
              <Route path='/restaurants/:resId' element={<RestaurantMenu />} />
            </Routes>
          </BrowserRouter>
        <Footer />
    </CartProvider>
    </>
  )
}

export default App;
