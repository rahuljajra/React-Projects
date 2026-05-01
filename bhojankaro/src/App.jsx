import Header from './components/header/Header';
import Navtiles from './components/nav-tiles/Navtiles';
import Recipes from './components/recipes/Recipes';
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
    <Header />
      <section id="bk_banner_section" className='bg-orange-500 px-4 py-8'>
          <div className='container m-auto'>
             <div className='w-1/2 m-auto'>
              <div className='bk_title text-4xl font-bold text-center text-white mb-4'>
                    <h2>Order food & groceries. Discover best restaurants. Bhojan Karo it!</h2>
                </div>
                <div className='bk_searchbar-wrapper flex justify-center gap-4'>
                    <div className='bk_delivery_location w-full'>
                      <input className='px-4 py-2 min-h-12 rounded-lg w-full bg-white' name='location search' placeholder='Enter your delivery location'/>
                    </div>
                    <div className='bk_search_menu w-full'>
                      <input className='px-4 py-2 min-h-12 rounded-lg w-full bg-white' name='search' placeholder='Search for restaurant, item or more' />
                    </div>
                </div>
             </div>
            <Navtiles />
          </div>
      </section>
      <Recipes />
      <Footer />
    </>
  )
}

export default App
