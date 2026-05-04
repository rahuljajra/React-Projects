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
        <div className="res-card">
            <img alt="restro-img" src={CARD_IMG + cloudinaryImageId}/>
            <h3>{name}</h3>
            <div className="rate-time"><h4>{avgRating}</h4><span>{sla.slaString}</span></div>
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwo}</p>
            <p>{veg}</p>
        </div>
    )
}

export default RestaurantCard;