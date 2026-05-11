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
            <img className="w-full rounded-lg h-93" alt="restro-img" src={CARD_IMG + cloudinaryImageId}/>
            <div className="res-desc min-h-42.5 p-4 grid gap-1">
                <h3 className="font-medium text-[18px]">{name}</h3>
                <div className="rate-time font-medium flex gap-2 items-center">
                    <h4 className="flex gap-1 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        width="16"
                        height="16">
                        <path d="M12 2l2.9 6.2 6.8.6-5 4.5 1.5 6.7L12 16.8 5.8 20l1.5-6.7-5-4.5 6.8-.6L12 2z" />
                    </svg>
                    {avgRating}</h4>
                    <span>| {sla.slaString}</span>
                </div>
                <p className="text-gray-500">{cuisines.join(', ')}</p>
                <p className="flex justify-between items-center">{costForTwo}</p>
            </div>
        </div>
    )
}

export const vegCard = (RestaurantCard) => {
    return (props) => {
        return(
            <div className="relative">
                <label className="absolute bg-green-600 text-white px-8 py-2 rounded-lg font-bold -left-2 -top-2">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;