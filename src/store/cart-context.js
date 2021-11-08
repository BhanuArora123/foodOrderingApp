import React, { useState } from "react";

const CartContext = React.createContext({
    cart:[],
    changeCart:() => {}
});

export const CartContextProvider = props => {
    const [CartState, setCart] = useState([]);
    return (
        <CartContext.Provider value={{
                cart:CartState,
                changeCart:setCart
            }} 
            >
                {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;