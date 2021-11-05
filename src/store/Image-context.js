import React from "react";

const ImageContext = React.createContext({
    src:"",
    alt:""
});

export const ImageContextProvider = (props) => {
    return <ImageContext.Provider value={props.value}>
        {props.children}
    </ImageContext.Provider>
}

export default ImageContext;