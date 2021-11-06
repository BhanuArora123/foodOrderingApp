import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummary";
import classes from "./Meals.module.css";

const Meals = props => {
    return (
        <section className={classes["meals"]}>
            <AvailableMeals />
            <MealSummary />
        </section>
    )
}

export default Meals;