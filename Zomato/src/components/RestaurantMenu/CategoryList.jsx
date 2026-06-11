import { useCart } from "../../contexts/CartContext";

const CategoryList = ({categories}) => {
    console.log(categories, "aa");
    const {cartItems, addItem, removeItem} = useCart();

    const getQty = (itemId) => {
        const item = cartItems.find((i) => i.id === item.id);
        return item ? item.quantity : 0
    }

    const catList = categories.filter((c) =>
          c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      
      console.log(catList);
    return(
        <>
            {
                categories.map((item) => (
                    <div>
                        <h2>item</h2>


                    </div>
                    // <div className="addtocart flex gap-2 my-6">
                    //     <button onClick={() => removeItem(item)} className= "text-lg border border-black px-4 rounded-lg">-</button>
                    //     <input type="number" className="border border-black" /> 
                    //     <button onClick={() => addItem(item)} className="text-lg border border-black px-4 rounded-lg">+</button>
                    // </div>
                ))
            }
           
        </>
    )
}

export default CategoryList;