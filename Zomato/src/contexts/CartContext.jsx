import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItems = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if(existing) {
                return prev.map((i) => 
                    i.id === item.id ? {...i, quantity: i.quantity + 1} : i
                );   
            }
        })
    }

    const removeItems = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if(existing.quantity === 1) {
                return prev.filter((i) => i.id !== item.id);
            }
            return prev.map((i) => 
                i.id === item.id ? {...i, quantity: i.quantity - 1} : i
            );
        })
    }


    const clearItems = () => setCartItems([]);

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price / 100) * item.quantity, 0);

    return (
        <CartContext.Provider value={{cartItems, addItems, removeItems, clearItems, totalCount, totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}