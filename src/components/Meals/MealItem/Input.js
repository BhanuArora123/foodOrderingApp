import classes from "./Input.module.css";


const Input = props => {
    return (
        <div className={classes["input-field"]}>
            <label 
            htmlFor={props.input.id}>{
                props.input.label    
            }</label>
            <input 
                {...props.input}
            />
        </div>
    ) 
}

export default Input;