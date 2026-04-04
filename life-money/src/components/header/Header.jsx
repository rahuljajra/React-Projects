import React, {useContext, useState, useEffect} from "react";
import { ThemeContext } from "../../ThemeContext";

function Header({onSearch}) {
  const [query, setQuery] = useState('');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if(!query.trim()) return;
    const timer = setTimeout(() => {
      fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then(res => res.json())
      .then((data) => {
        onSearch?.(data.users);
      })
    }, 500)
    return () => clearTimeout(timer);
  }, [query, onSearch])
  return(
    <>
      <nav className="bg-white shadow sticky top-0 z-50 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold gradient-text">SocialConnect</div>
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search Users" value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
            <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
            <i className="fas fa-home text-xl"></i>
          </button>
          <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
            <i className="fas fa-user-friends text-xl"></i>
          </button>
          <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
            <i className="fas fa-tv text-xl"></i>
          </button>
          <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
            <i className="fas fa-bell text-xl"></i>
          </button>
          <div className="relative">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-10 w-10 rounded-full cursor-pointer hover:ring-2 ring-blue-500 transition duration-200" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;