import { useContext } from "react";
import ShowContext from "../../store/show-context";
import classes from "./BackDrop.module.css";

const BackDrop = props => {
    const height = window.innerHeight;
    const showCtx = useContext(ShowContext);
    const clickHandler = () => {
        showCtx.changeShow(false);
    }
    return (
        <div className={classes["backdrop"]} style={{height:height}} onClick={clickHandler}>
            
        </div>
    )
}

export default BackDrop;