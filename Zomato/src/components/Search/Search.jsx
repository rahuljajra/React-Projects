import {useState, useEffect} from "react";
import { SEARCH, SEARCH_IMG } from "../utils/constants";
const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(()=> {
        if(query.length < 3) return
        const timer = setTimeout(() => {
            if(query.trim()) {
                fetchSearch(query);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [query])

    const fetchSearch = async ()=> {
        const data = await fetch(`${SEARCH} + ${query}&trackingId=undefined&includeIMItem=true`);
        const json = await data.json();
        setSearchResult(json?.data?.suggestions);
        console.log(json);
    }

    const showSearchResult = (e) => {
        setQuery(e.target.value)
    }

    return(
        <section id="search" className="relative">
        <input className="rounded-full h-[10.5] w-[320px] px-4 border border-gray-400 cursor-pointer" type="text" onChange={showSearchResult} placeholder="Searh Menu" name="search" />
        <div className="search-result-wrapper absolute to-0% bg-white shadow shadow-amber-100 max-h-100 overflow-auto">
            {searchResult.map((search, index) =>
                <div key={index} className="search-result grid grid-cols-2 gap-2 items-center cursor-pointer hover:bg-gray-200 mb-4">
                <div>
                    <img className="w-full h-20 object-cover" src={SEARCH_IMG + search.cloudinaryId} alt="" />
                </div>
                <div>
                    <h3>{search.text}</h3>
                    <p>{search.type}</p>
                </div>
            </div>
        )}

        </div>
        </section>
    )
}

export default Search;