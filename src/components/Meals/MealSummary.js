import Secondary from "../Headings/Secondary";
import Card from "../UI/Card";
import classes from "./MealSummary.module.css";

const MealSummary = (props) => {
    return (
        <Card styling={classes["wrapper"]}>
            <Secondary styling={classes["head"]}>Delicious Food , Delivered To You</Secondary>
            <p className={classes["para"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde vel labore est fuga!
            </p>
            <p className={classes["para"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde vel labore est fuga!
            </p>
        </Card>
    )
}

export default MealSummary;