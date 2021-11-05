// import classes from "./Secondary.module.css";

const Secondary = (props) => {
    return (
        <h2 className={props.styling?props.styling : ""}>
            {props.children}
        </h2>
    )
}

export default Secondary;