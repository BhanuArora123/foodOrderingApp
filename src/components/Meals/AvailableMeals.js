import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = props => {
    const Meals = [
        {
            title: "Sushi",
            desc: "very delicious japanese dish",
            price: 12.99,
            key: 1
        },
        {
            title: "Chole Bhature",
            desc: "most popular indian dish",
            price: 14.99,
            key: 2
        },
        {
            title: "Chilli Potato",
            desc: "a mouth watering dish",
            price: 23.99,
            key: 3
        },
        {
            title: "Masala Dosa",
            desc: "south indian dish liked by people all over the world",
            price: 24.75,
            key: 4
        }
    ];
    return (
        <Card styling={classes["outerMealBox"]}>
            <ul className={classes["innerMealBox"]}>
                {
                    Meals.map(meal => {
                        return <MealItem
                            title={meal.title}
                            key={meal.key}
                            desc={meal.desc}
                            price={meal.price}
                            id={meal.key} />
                    })
                }
            </ul>
        </Card>
    )
}

export default AvailableMeals;