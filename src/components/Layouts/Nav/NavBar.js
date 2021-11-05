import Primary from "../../Headings/Primary"
import Card from "../../UI/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import classes from "./NavBar.module.css";

const NavBar = (props) => {
    return (
        <nav className={classes.navbar}>
            <div className={classes["nav-items"]}>
                <Primary>ReactMeals</Primary>
            </div>
            <div className={classes["nav-items"]} >
                <Card styling={classes["cartBox"]}>
                    <span>
                        <FontAwesomeIcon icon={faCartPlus}>
                        </FontAwesomeIcon>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span>
                        <Card styling={classes["quantityBox"]}>
                            0
                        </Card>
                    </span>
                </Card>
            </div>
        </nav>
    )
}

export default NavBar;