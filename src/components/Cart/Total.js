import { Fragment } from "react/cjs/react.production.min"
import Tertiary from "../Headings/Tertiary";
import classes from "./Total.module.css";

const Total = props => {
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
                    <button >Close</button>
                </div>
                <div className={classes["order"]}>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}

export default Total;