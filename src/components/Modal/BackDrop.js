import classes from "./BackDrop.module.css";

const BackDrop = props => {
    const height = window.innerHeight;
    const clickHandler = () => {
        console.log("close me")
    }
    return (
        <div className={classes["backdrop"]} style={{height:height}} onClick={clickHandler}>
            
        </div>
    )
}

export default BackDrop;