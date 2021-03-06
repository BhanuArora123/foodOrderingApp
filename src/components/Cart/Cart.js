import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import Total from "./Total";
import classes from "./Cart.module.css";


const Cart = props => {
    let totalPrice = 0;
    const CartCtx = useContext(CartContext);
    return (
        <Card styling={ classes["cart"] } value={CartCtx.cart}>
            {
                CartCtx.cart.map((cartItem) => {
                    if (cartItem) {
                        totalPrice += cartItem.price * cartItem.qty;
                        return (
                            <CartItem
                                name={ cartItem.title }
                                price={ cartItem.price }
                                key={ cartItem.key }
                                qty={ cartItem.qty }
                                id={cartItem.key}
                            />
                        )
                    }
                    else{
                        return (<></>);
                    }
                })
            }
            <Total totalPrice={ totalPrice }></Total>
        </Card>
    )
}

export default Cart;