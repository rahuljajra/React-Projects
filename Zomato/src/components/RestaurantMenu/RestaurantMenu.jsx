import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "./CategoryList";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState([]);
    const [resCategories, setResCategories] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${params.resId}`);
        const json = await data.json();
        setResMenu(json?.data?.cards[2]?.card?.card?.info);
        setResCategories(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        console.log(json)
    }

    

    if(resMenu.length === 0) return;

    return(
        <>
            <div className="container m-auto">
                <h2>{resMenu.name}</h2>
                <p>{resMenu.locality}</p>

                <CategoryList categories = {resCategories}/>
                
            </div>
            
        </>
    )
}

export default RestaurantMenu;