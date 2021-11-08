import { useContext } from "react";
import ShowContext from "../../store/show-context";
import Tertiary from "../Headings/Tertiary";
import classes from "./Total.module.css";

const Total = props => {
    const showCtx = useContext(ShowContext);
    const closeModalHandler = () => {
        showCtx.changeShow(false);
    }
    const orderModalHandler = () => {
        console.log("Ordering...");
    }
    return (
        <div className={classes["totalAmount"]}>
            <div className={classes["totalPrice"]}>
                <Tertiary styling={classes["total-head"]}>Total Amount</Tertiary>
                <div className={classes["price"]}>
                    ${ props.totalPrice }
                </div>
            </div>
            <div className={classes["totalPrice"]}>
                <div className={classes["close"]}>
                    <button onClick={closeModalHandler}>Close</button>
                </div>
                <div className={classes["order"]}>
                    <button onClick={orderModalHandler}>Order</button>
                </div>
            </div>
        </div>
    )
}

export default Total;