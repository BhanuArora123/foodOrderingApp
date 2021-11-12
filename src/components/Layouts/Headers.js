import React, { Fragment } from "react";
import { ImageContextProvider } from "../../store/Image-context";
import BgImage from "./BackImage/BgImage";
import NavBar from "./Nav/NavBar";
import foodGallery from "../../images/foodGallery.webp";
import Meals from "../Meals/Meals";
import AddFood from "./AddFood";

const Headers = props => {
    return (
        <Fragment>
                <NavBar></NavBar>
            <ImageContextProvider value = {{
                    src:foodGallery,
                    alt:"food Gallery"
                }}>
                <BgImage></BgImage>
            </ImageContextProvider>
            <Meals></Meals>
            <AddFood></AddFood>
        </Fragment>
    )
};

export default Headers;