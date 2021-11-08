import Card from "../UI/Card";
import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare , faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Tertiary from "../Headings/Tertiary";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import TotalProdCtx from "../../store/totalProducts-context";

const CartItem = (props) => {
    const CartCtx = useContext(CartContext);
    const totalProdCtx = useContext(TotalProdCtx);
    const increaseItem = () => {
        CartCtx.changeCart((prev) => {
            let current = [...prev];
            current[props.id - 1] = {
                ...current[props.id - 1],
                qty: 1 + current[props.id - 1].qty
            }
            return current;
        })
        totalProdCtx.changeTotal(prev => {
            return prev + 1;
        })
    }
    const decreaseItem = () => {
        CartCtx.changeCart((prev) => {
            let current = [...prev];
            if(current[props.id - 1].qty === 1){
                current[props.id - 1] = null;
                return current;
            }
            current[props.id - 1] = {
                ...current[props.id - 1],
                qty: current[props.id - 1].qty - 1
            };
            return current;
        })
        totalProdCtx.changeTotal(prev => {
            return prev-1;
        })
    }
    return (
        <Card styling={classes["cartItem"]}>
            <div className={classes["cartItem-part"]}>
                <Tertiary styling={classes["cartItem-subpart"]}>
                    { props.name }
                </Tertiary>
                <div className={classes["cartItem-subpart"]}>
                    <div>{ props.price }</div>
                    <div>x {props.qty}</div>
                </div>
            </div>
            <div className={classes["cartItem-part"] + " " + classes["horizontal-part"]}>
                <FontAwesomeIcon icon={faPlusSquare} size="lg" className={classes["icon"]} onClick={increaseItem}/>
                <FontAwesomeIcon icon={faMinusSquare} size="lg" className={classes["icon"]} onClick={decreaseItem}/>
            </div>
        </Card>
    )
}

export default CartItem;