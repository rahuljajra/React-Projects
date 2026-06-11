import {useSelector} from "react-redux"
import CategoryList from "./CategoryList";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems, "helo")
    return(
        <div className="container mx-auto p-4 my-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <CategoryList data={{itemCards: cartItems}} />
        </div>
    )
}

export default Cart;