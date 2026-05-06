import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";
import {RES_LIST} from "./utils/constants";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
        <section className="body-container container">
            <div className="sort-container">
                <div className="search-container">
                    <input id="search" type="text" className="search" value={searchValue} onChange={(e)=> {
                        setSearchValue(e.target.value);
                    }} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating < 4.5 
                    );
                    setFilteredRestaurants(filteredList);
                }}>
                    Sort</button>
                </div>
            <div className="res_container container">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/listRestaurantMenu/" + restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
                
            </div>
        </section>
    )
}

export default Body;