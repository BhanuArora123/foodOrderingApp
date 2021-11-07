import Cart from "../Cart/Cart";
import { CartContextProvider } from "../../store/cart-context";
import classes from "./ModalBox.module.css";

const ModalBox = props => {
    return (
        <div className={classes["modalBox"]}>
            <CartContextProvider>
                <Cart></Cart>
            </CartContextProvider>
        </div>
    )
}

export default ModalBox;
