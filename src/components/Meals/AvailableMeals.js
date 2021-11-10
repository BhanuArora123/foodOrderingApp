import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = props => {
    const [Meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // fetch from remote server
    async function getFoodItem() {
        try {
            let res = await fetch("http://localhost:8080/foodItems");
            let mealItem = await res.json();
            console.log(mealItem);
            setMeals(mealItem.foodItems);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getFoodItem();
    },
    []
    )
    return (
        <>
            {
                isLoading && <p>Loading...</p>
            }
            {
                !isLoading && Meals.length === 0 && <p>No meals available :(</p>
            }
            {
                !isLoading && Meals.length > 0 && <Card styling={ classes["outerMealBox"] }>
                    <ul className={ classes["innerMealBox"] }>
                        {
                            Meals.map(meal => {
                                return <MealItem
                                    title={ meal.title }
                                    key={ meal.key }
                                    desc={ meal.desc }
                                    price={ meal.price }
                                    id={ meal.key } />
                            })
                        }
                    </ul>
                </Card>
            }
        </>
    )
}

export default AvailableMeals;