function Header() {
    return(
        <>
  <nav class="bg-white shadow sticky top-0 z-50 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <div class="text-2xl font-bold gradient-text">SocialConnect</div>
      <div class="relative hidden md:block">
        <input type="text" placeholder="Search SocialConnect" class="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
        <i class="fas fa-search absolute left-3 top-3 text-gray-500"></i>
      </div>
    </div>
    <div class="flex items-center space-x-6">
      <button class="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
        <i class="fas fa-home text-xl"></i>
      </button>
      <button class="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
        <i class="fas fa-user-friends text-xl"></i>
      </button>
      <button class="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
        <i class="fas fa-tv text-xl"></i>
      </button>
      <button class="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-200 transition duration-200">
        <i class="fas fa-bell text-xl"></i>
      </button>
      <div class="relative">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="h-10 w-10 rounded-full cursor-pointer hover:ring-2 ring-blue-500 transition duration-200" />
      </div>
    </div>
  </nav>
        </>
    )
}

export default Header;