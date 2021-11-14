import AddMeal from "../Meals/AddMeal"
import classes from "./AddFood.module.css";
import addMeal from "../Meals/Requests/AddMeal";
import { useState } from "react/cjs/react.development";

const AddFood = (props) => {
    const addMealItem = async (mealData) => {
        await addMeal(mealData,props.setMeal,props.setError);
    }
    return (
        <section className={classes["addFood"]}>
            <AddMeal addMeal={addMealItem}  total={props.total}></AddMeal>
        </section>
    )
}
export default AddFood;