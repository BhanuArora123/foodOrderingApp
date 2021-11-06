import Card from "../../UI/Card"
import QuantityForm from "./QuantityForm";
import classes from "./MealItem.module.css";
import Tertiary from "../../Headings/Tertiary";

const MealItem = props => {
    return (
        <Card styling={classes["mealItem"]}>
            <li>
                <div className={classes["subMealItem"]}>
                    <Tertiary styling={classes["mealName"]}>
                        {props.title}
                    </Tertiary>
                    <div>
                        {props.desc}
                    </div>
                    <div>
                        ${props.price}
                    </div>
                </div>
                <div className={classes["subMealItem"]}>
                    <QuantityForm key={props.key}></QuantityForm> 
                </div>
            </li>
        </Card>
    )
}
export default MealItem;