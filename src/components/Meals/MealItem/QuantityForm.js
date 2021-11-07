import { useContext, useState } from "react";
import Input from "./Input";
import classes from "./QuantityForm.module.css";
import CartContext from "../../../store/cart-context";
import TotalProdCtx from "../../../store/totalProducts-context";
const QuantityForm = props => {
    const totalProdCtx = useContext(TotalProdCtx);
    const cartCtx = useContext(CartContext);
    const [clicked , setClick] = useState(false);
    const clickHandler = (event) => {
        event.preventDefault();
        console.log("clicked");
        setClick(true);
    }
    const addToCart = (qty) => {
        console.log("triggered");
        cartCtx.changeCart((prev) => {
            const current = prev;
            console.log(prev);
            current[props.id - 1] = {
                title:props.title,
                desc:props.desc,
                price:props.price,
                qty:parseInt(qty),
                key:props.id
            };
            console.log(current);
            return current;
        })
        totalProdCtx.changeTotal((prev) => {
            let current = prev + parseInt(qty);
            console.log(current);
            return current;
        } )
        // setClick(false);
    }
    return (
        <form className={classes["quantityForm"]} onSubmit={clickHandler}>
            <Input 
            input={{
                id:"amount"+props.id,
                type:"number",
                placeholder:0,
                label:"Amount :"
            }}
            clicked={clicked}
            addToCartHandler={addToCart}
            />
            <button className={classes["btn"]}>
                +Add
            </button>
        </form>
    )
}

export default QuantityForm;