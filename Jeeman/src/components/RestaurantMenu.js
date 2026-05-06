import {useEffect, useState}  from "react";
import {RES_MENU}  from "./utils/constants";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_MENU);
        const json = await data.json();
        console.log(json, "JSON");
        setResMenu(json.data);
    }



    return(
        <div className="container">
            <h2>{resMenu?.cards[2]?.card.card.info.name}</h2>

            <div className="recommended_wrapper">
                <div className="recommended-items">
                    <div className="list-name">
                        <div></div>
                        <h2></h2>
                        <p className="price"></p>
                        <p className="rating"></p>
                        <p className="des"></p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;