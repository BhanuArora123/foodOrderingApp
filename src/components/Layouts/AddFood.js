import AddMeal from "../Meals/AddMeal"
import classes from "./AddFood.module.css";
// import { useState } from "react/cjs/react.development";

const AddFood = (props) => {
    return (
        <section className={classes["addFood"]}>
            <AddMeal setclick={props.setclick} setMealItem={props.setMealItem}></AddMeal>
        </section>
    )
}
export default AddFood;