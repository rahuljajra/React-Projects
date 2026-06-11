import {useEffect, useState}  from "react";
import {RES_MENU}  from "./utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_MENU + resId);
        const json = await data.json();
        console.log(json, "JSON");
        setResMenu(json.data);
    }

    if(resMenu === null) return <Shimmer />


    const {name, costForTwo, cuisines, avgRating, sla, totalRatingsString} = resMenu?.cards[2]?.card?.card?.info;

    const menuCategories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="res-menu-banner">
                <div>
                    <div className="text-lg flex gap-2"><span>{avgRating} ({totalRatingsString})</span>|<span>{costForTwo}</span></div>
                    <p className="text-orange-400 text-lg">{cuisines.join(", ")}</p>
                    <div className="text-lg font-medium">{sla.slaString}</div>
                </div>
            </div>
            {menuCategories.map((categories, index) => (
                <RestaurantCategory key={index} data = {categories.card.card}
                 showItems = {index === showIndex ? true : false} 
                 setShowIndex = {() => setShowIndex(index)} 
                 />
            ))}
        </div>
    )
}

export default RestaurantMenu;