import React, { Fragment } from "react";
import { ImageContextProvider } from "../../store/Image-context";
import BgImage from "./BackImage/BgImage";
import NavBar from "./Nav/NavBar";
import foodGallery from "../../images/foodGallery.webp";
import Meals from "../Meals/Meals";
import AddFood from "./AddFood";
import { useState } from "react/cjs/react.development";

const Headers = props => {
    const [errorFun, setError] = useState(() => {})
    const [mealFun,setMeal] = useState(() => {});
    const [totalItems , setTotal] = useState(0);
    return (
        <Fragment>
                <NavBar></NavBar>
            <ImageContextProvider value = {{
                    src:foodGallery,
                    alt:"food Gallery"
                }}>
                <BgImage></BgImage>
            </ImageContextProvider>
            <Meals setError={setError} setMeal={setMeal} setTotal={setTotal}></Meals>
            <AddFood setError={errorFun} setMeal={mealFun} total={totalItems}></AddFood>
        </Fragment>
    )
};

export default Headers;