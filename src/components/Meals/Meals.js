import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummary";
import classes from "./Meals.module.css";

const Meals = props => {
    return (
        <section className={classes["meals"]}>
            <AvailableMeals isClicked={props.isClicked} mealItem={props.mealItem} setclick={props.setclick} addMeal={props.addMeal} />
            <MealSummary />
        </section>
    )
}

export default Meals;