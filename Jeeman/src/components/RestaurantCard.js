import { CARD_IMG } from "./utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        sla,
        costForTwo,
        veg
    } = resData?.info;

    return(
        <div className="res-card shadow-gray-300 shadow bg-gray-200 rounded-lg">
            <img className="w-full rounded-lg" alt="restro-img" src={CARD_IMG + cloudinaryImageId}/>
            <div className="res-desc min-h-60 p-2 grid gap-1">
                <h3 className="font-medium text-[18px]">{name}</h3>
                <div className="rate-time"><h4>{avgRating}</h4><span>{sla.slaString}</span></div>
                <p>{cuisines.join(', ')}</p>
                <p>{costForTwo}</p>
                <p>{veg ? "🟩" : "🟥"}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;