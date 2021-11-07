import Card from "../UI/Card";
import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare , faMinusSquare } from "@fortawesome/free-solid-svg-icons";


const CartItem = (props) => {
    return (
        <Card styling={classes["cartItem"]}>
            <div className={classes["cartItem-part"]}>
                <div className={classes["cartItem-subpart"]}>
                    { props.name }
                </div>
                <div className={classes["cartItem-subpart"]}>
                    <div>{ props.price }</div>
                    <div>x {props.qty}</div>
                </div>
            </div>
            <div className={classes["cartItem-part"]}>
                <FontAwesomeIcon icon={faPlusSquare} />
                <FontAwesomeIcon icon={faMinusSquare} />
            </div>
        </Card>
    )
}

export default CartItem;