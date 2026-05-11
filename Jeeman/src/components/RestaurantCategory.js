
import { CARD_IMG } from "./utils/constants";
const RestaurantCategory = ({data}) => {

    return(
        <>
            <div className="acc-header">
                <h2 className="flex justify-between py-4 px-4 shadow-lg rounded cursor-pointer bg-gray-300 my-2"><span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
                <span><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                >
                <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg></span></h2>
            </div>
            <div className="acc-body">
                   {data.itemCards.map((itemscards) => (
                        <div key={itemscards.card.info.id} className="flex my-4">
                            <div className="w-10/12">
                                <h3 className="text-xl font-medium">{itemscards.card.info.name}</h3>
                                <div className="text-orange-400 font-medium">₹{itemscards.card.info.price/100}</div>
                                <p className="text-gray-400">{itemscards.card.info.description}</p>
                            </div>
                            <div className="w-2/12 relative">
                                <img className="w-full max-w-full rounded-2xl" alt={itemscards.card.info.name} src={CARD_IMG + itemscards.card.info.imageId} />
                                <button className="bg-black px-4 py-2 text-white absolute -bottom-1.5 cursor-pointer left-0 right-0 rounded-lg w-6/12 m-auto">Add +</button>
                            </div>
                        </div>
                        
                   ))}
            </div>
        </>
    )
}

export default RestaurantCategory;