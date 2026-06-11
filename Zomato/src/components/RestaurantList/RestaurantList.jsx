import { useEffect, useState } from "react";
import {RES_LIST} from "../utils/constants";
import InfiniteScroll from "./InfiniteScroll";
import FilterModal from "../FilterModal/FilterModal";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const RestaurantList = () => {
 const [resInfo, setResInfo] = useState([]);
 const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setResInfo(json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        <>
        <Filters onOpenModal={() => setIsModalOpen(true)} />
        <section className="restro-list grid grid-cols-4 gap-4 container m-auto">
            {resInfo.map((res) => (
                <Link to={`/restaurants/${res.info.id}`}>
                    <div className="restro-card bg-gray-200 p-4" key={res.info.id}>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + res.info.cloudinaryImageId} alt={res.info.name} />
                        <h2>{res.info.name}</h2>
                        <p>{res.info.cuisines.join(', ')}</p>
                        <p>{res.info.avgRating}</p>
                        <p>{res.info.sla.slaString}</p>
                    </div>
                </Link>
                ))}
        </section>
        <FilterModal filterRes = {resInfo}
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} onFilter = {(arr) => setResInfo(arr)}
        />
        <InfiniteScroll />
        
        </>
    )
}

export default RestaurantList;