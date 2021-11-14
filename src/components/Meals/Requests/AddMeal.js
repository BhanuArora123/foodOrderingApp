import axios from "axios";
const addMeal = async (mealData,setCart,setError) => {
    console.log(mealData);
    let response = await axios({
        method: "post",
        url:"http://localhost:8080/addFoodItem",
        data:{
            foodItem:mealData
        }
    })
    if(response.status !== 200 && response.status !== 201){
        console.log(response.data.message);
        setError(true);
    }
    setError(false);
    console.log(setCart);
    setCart((prev) => {
        let current = [...prev];
        current.push(mealData);
        return current;
    })
}
export default addMeal;