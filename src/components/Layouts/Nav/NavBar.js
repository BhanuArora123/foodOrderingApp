import Primary from "../../Headings/Primary"
import Card from "../../UI/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import classes from "./NavBar.module.css";
import { useContext } from "react";
import ShowContext from "../../../store/show-context";
import TotalProdCtx from "../../../store/totalProducts-context";

const NavBar = (props) => {
    const showCtx = useContext(ShowContext);
    const modalHandler = () => {
        showCtx.changeShow(true);
    }
    const totalProdCtx = useContext(TotalProdCtx);
    console.log(totalProdCtx.total)
    return (
        <nav className={classes.navbar}>
            <div className={classes["nav-items"]}>
                <Primary>ReactMeals</Primary>
            </div>
            <div className={classes["nav-items"]} >
                <Card styling={classes["cartBox"]}>
                    <span onClick={modalHandler}>
                        <FontAwesomeIcon icon={faCartPlus}>
                        </FontAwesomeIcon>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span>
                        <Card value={totalProdCtx.total} styling={classes["quantityBox"]}>
                            {
                                totalProdCtx.total
                            }
                        </Card>
                    </span>
                </Card>
            </div>
        </nav>
    )
}

export default NavBar;