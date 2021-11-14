import React, { Fragment } from "react";
import { ImageContextProvider } from "../../store/Image-context";
import BgImage from "./BackImage/BgImage";
import NavBar from "./Nav/NavBar";
import foodGallery from "../../images/foodGallery.webp";
import Meals from "../Meals/Meals";
import AddFood from "./AddFood";
import { useState } from "react/cjs/react.development";
import { addMeal } from "../Meals/Requests/AddMeal";

const Headers = props => {
    const [mealItem , setMealItem] = useState();
    const [isClicked , setclick] = useState(false);
    return (
        <Fragment>
                <NavBar></NavBar>
            <ImageContextProvider value = {{
                    src:foodGallery,
                    alt:"food Gallery"
                }}>
                <BgImage></BgImage>
            </ImageContextProvider>
            <Meals isClicked={isClicked} mealItem={mealItem} setclick={setclick} addMeal={addMeal}></Meals>
            <AddFood setclick={setclick} setMealItem={setMealItem} ></AddFood>
        </Fragment>
    )
};

export default Headers;