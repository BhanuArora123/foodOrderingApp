import AddMeal from "../Meals/AddMeal"
import classes from "./AddFood.module.css";

const AddFood = (props) => {
    const addMealItem = (setMeal) => {
        
    }
    return (
        <section className={classes["addFood"]}>
            <AddMeal></AddMeal>
        </section>
    )
}
export default AddFood;