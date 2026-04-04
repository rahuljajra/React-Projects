function Header() {

    const handleLogin = () => {
        
    }
    return(
        <>
          <nav class="sticky top-0 z-50 px-4 py-2 flex items-center justify-between">
            <div class="flex items-center space-x-4">
            <div class="text-2xl font-bold gradient-text">Bhojan Karo</div>
            </div>
            <div class="flex items-center space-x-6">
            <a href="#" class="p-2 rrounded hover:bg-gray-200 transition duration-200">
                Bhojan Corporate
            </a>
            <a href="#" class="p-2 rounded hover:bg-gray-200 transition duration-200">
                Partner with us
            </a>
            <a href="#" class="p-2 rounded hover:bg-gray-200 transition duration-200">
                Get the App
            </a>
            <button class="px-8 py-2 rounded text-white bg-black transition duration-200">
                Sign in
            </button>
            </div>
        </nav>
        </>
    )
}

export default Header;