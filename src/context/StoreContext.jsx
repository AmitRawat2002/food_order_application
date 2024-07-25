import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [CartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!CartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1 }))
        }

    }
    const removefromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }


    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        removefromCart,
        addToCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;