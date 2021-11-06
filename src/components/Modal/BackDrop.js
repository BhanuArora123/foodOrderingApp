import classes from "./BackDrop.module.css";

const BackDrop = props => {
    const height = window.innerHeight;
    return (
        <div className={classes["backdrop"]} style={{height:height}}>
            
        </div>
    )
}

export default BackDrop;