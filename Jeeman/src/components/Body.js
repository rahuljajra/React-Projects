import {useState, useEffect} from "react";
import RestaurantCard, {vegCard} from "./RestaurantCard";
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";
import {RES_LIST} from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const VegRestroCard = vegCard(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    

    if(onlineStatus === false) {
        return <h1>You're Offline, Please check your internet connection</h1>
    }

    if(listOfRestaurants.length === 0) {
        return <Shimmer/>
    }

    const handleSearch = () => {
        const searchFilteredData = listOfRestaurants.filter((resfilter) => 
          resfilter.info.name.toLowerCase().includes(searchValue.toLowerCase())  
        );
        setFilteredRestaurants(searchFilteredData);
    }
    
    return(
        <section className="body-container container m-auto">
            <div className="sort-container flex justify-between py-8">
                <div className="search-container flex">
                    <input id="search" type="text" className="search border border-gray-400 rounded w-full px-2.5" placeholder="search" value={searchValue} onChange={(e)=> {
                        setSearchValue(e.target.value);
                    }} />
                    <button className="px-8 py-2 text-white bg-orange-400 rounded" onClick={handleSearch}>Search</button>
                </div>
                <button className="px-8 py-2 text-white bg-orange-400 rounded" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating < 4.5 
                    );
                    setFilteredRestaurants(filteredList);
                }}>
                    Sort</button>
                </div>
            <div className="res_container container grid grid-cols-4 gap-4 mb-8">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/listRestaurantMenu/" + restaurant?.info?.id}>
                        {restaurant?.info?.veg ? (<VegRestroCard resData={restaurant} /> 
                    ) : (
                    <RestaurantCard  resData={restaurant} />
                    )}
                        
                    </Link>
                ))}
                
            </div>
        </section>
    )
}

export default Body;