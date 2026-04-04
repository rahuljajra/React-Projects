import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/header/Header'
import './App.css'

function App() {
  return (
    <>
      <section id="bk_banner_section" className='bg-orange-500 px-4 py-8'>
          <div className='container'>
             <Header />
             <div className='w-1/2 m-auto'>
              <div className='bk_title text-4xl font-bold text-center text-white mb-4'>
                    <h2>Order food & groceries. Discover best restaurants. Bhojan Karo it!</h2>
                </div>
                <div className='bk_searchbar-wrapper flex justify-center gap-4'>
                    <div className='bk_delivery_location w-full'>
                      <input className='px-4 py-2 min-h-12 rounded-lg w-full' name='location search' placeholder='Enter your delivery location'/>
                    </div>
                    <div className='bk_search_menu w-full'>
                      <input className='px-4 py-2 min-h-12 rounded-lg w-full' name='search' placeholder='Search for restaurant, item or more' />
                    </div>
                </div>
             </div>

          </div>
      </section>
    </>
  )
}

export default App
