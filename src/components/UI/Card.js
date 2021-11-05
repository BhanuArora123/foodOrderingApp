import classes from "./Card.module.css";

const Card = (props) => {
    return <div className={`${classes["basic"]} ${props.styling?props.styling: ""}`}>
        {props.children}
    </div>
};

export default Card;