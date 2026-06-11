const Search = () => {
    return(
        <div className="flex items-center justify-center">
            <input type="text" name="search" id="searchbox" className="border border-gray-400 p-2 w-7/12 rounded-l-full" placeholder="search"  />
            <div className="bg-gray-400 py-2 px-4 border border-gray-400 rounded-r-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="2" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default Search;