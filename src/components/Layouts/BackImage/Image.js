// import classes from "./Image.module.css";
import ImageContext from "../../../store/Image-context";
import { useContext } from "react";

const Image = (props) => {
    const imgCtx = useContext(ImageContext)
    return (
        <img 
        src={imgCtx.src} 
        alt={imgCtx.alt} 
        width={props.width} 
        height={props.height}/>
    );
}

export default Image;