import Cart from "../Cart/Cart";
// import { CartContextProvider } from "../../store/cart-context";
import classes from "./ModalBox.module.css";

const ModalBox = props => {
    return (
        <div className={classes["modalBox"]}>
                <Cart></Cart>
        </div>
    )
}

export default ModalBox;
