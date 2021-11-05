import classes from "./Primary.module.css";
const Primary = props => {
    return <h1 className={classes.primaryHead}>
        {props.children}
    </h1>
}
export default Primary;