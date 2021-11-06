import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = props => {
    const [CartState, setCart] = useState([]);
    return (
        <CartContext.Provider value={CartState} changeCart={CartState}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;