import axios from "axios";
export const addMeal = async (mealData,setCart,setError,setclick) => {
    console.log(setError);
    let response = await axios({
        method: "post",
        url:"http://localhost:8080/addFoodItem",
        data:{
            foodItem:mealData
        }
    })
    if(response.status !== 200 && response.status !== 201){
        console.log(response.data.message);
        return setError(true);
    }
    setError(false);
    console.log(setCart);
    setCart((prev) => {
        let current = [...prev];
        current.push(mealData);
        return current;
    })
    setclick(false);
}