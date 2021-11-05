import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummary";

const Meals = props => {
    return (
        <section>
            <AvailableMeals />
            <MealSummary />
        </section>
    )
}

export default Meals;