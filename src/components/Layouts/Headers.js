import React, { Fragment } from "react";
import { ImageContextProvider } from "../../store/Image-context";
import BgImage from "./BackImage/BgImage";
import NavBar from "./Nav/NavBar";
import foodGallery from "../../images/foodGallery.webp";
import Meals from "../Meals/Meals";

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
        </Fragment>
    )
};

export default Headers;