import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

const AvailableMeals = props => {
    const [Meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(() => {
        props.setError(setError);
        props.setMeal(setMeals);
        props.setTotal(Meals.length);
    },[])
    // fetch from remote server
    const getFoodItem = useCallback(async function getFoodItem() {
        try {
            let res = await fetch("http://localhost:8080/foodItems");
            let mealItem = await res.json();
            console.log(mealItem);
            setMeals(mealItem.foodItems ? mealItem.foodItems : []);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    },[]);
    
    useEffect(() => {
        getFoodItem();
    },
    [getFoodItem]
    )
    return (
        <>
            {
                isLoading && <p>Loading...</p>
            }
            {
                !isLoading && error && <p> something went wrong </p>
            }
            {
                !isLoading && !error &&  (Meals.length === 0) && <p>No meals available :(</p>
            }
            {
                !isLoading && !error && Meals.length > 0 && <Card styling={ classes["outerMealBox"] }>
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