import { addItem } from "./utils/cartSlice";
import { CARD_IMG } from "./utils/constants";
import {useDispatch} from "react-redux"

const CategoryList = ({data})=> {

    const dispatch = useDispatch()
    const handleAddItems = (itemCards) => {
        dispatch(addItem(itemCards));
    }

    return(
        <div className="acc-body">
            {data.itemCards.map((itemscards) => (
                <div key={itemscards.card.info.id} className="flex justify-between my-4">
                    <div className="">
                        <h3 className="text-xl font-medium">{itemscards.card.info.name}</h3>
                        <div className="text-orange-400 font-medium">₹{itemscards.card.info.price/100}</div>
                        <p className="text-gray-400">{itemscards.card.info.description}</p>
                    </div>
                    <div className="relative">
                        <img className="max-w-full rounded-2xl h-25 w-25" alt={itemscards.card.info.name} src={CARD_IMG + itemscards.card.info.imageId} />
                        <button className="bg-black px-4 py-2 text-white absolute -bottom-1.5 cursor-pointer rounded-lg" onClick={() => handleAddItems(itemscards)}>Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryList;