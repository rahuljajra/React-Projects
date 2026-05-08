import { useEffect, useState } from "react";
import {RES_LIST} from "../utils/constants"

const RestaurantList = () => {
 const [resInfo, setResInfo] = useState([]);

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async ()=> {
        const data = await fetch(RES_LIST);
        const json = await data.json();

        console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResInfo(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        
        <section className="restro-list grid grid-cols-4 gap-4 container m-auto">
            {resInfo.map((res) => (
                <div className="restro-card bg-gray-200" key={res.info.id}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + res.info.cloudinaryImageId} alt="" />
                    <h2>{res.info.name}</h2>
                    <p>{res.info.cuisines.join(', ')}</p>
                    <p>{res.info.avgRating}</p>
                    <p>{res.info.sla.slaString}</p>
                </div>
            ))}

        </section>
    )
}

export default RestaurantList;