import Card from "../../UI/Card"
import QuantityForm from "./QuantityForm";
import classes from "./MealItem.module.css";

const MealItem = props => {
    return (
        <Card styling={classes["mealItem"]}>
            <li>
                <div className={classes["subMealItem"]}>
                    <div>
                        {props.title}
                    </div>
                    <div>
                        {props.desc}
                    </div>
                    <div>
                        {props.price}
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