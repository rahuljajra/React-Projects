import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                    <RestaurantCard key={restaurant?.info?.id}  resData={restaurant} />
                ))}
                
            </div>
        </section>
    )
}

export default Body;