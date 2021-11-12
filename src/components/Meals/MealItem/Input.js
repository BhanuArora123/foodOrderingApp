import { useEffect, useState } from "react";
import classes from "./Input.module.css";


const Input = props => {
    const [amount,setAmount] = useState("");
    const changeHandler = (event) => {
        const val = event.target.value;
        setAmount(val);
    }
    useEffect(() => {
        if(props.clicked === true){
            props.addToCartHandler(amount);
            setAmount("");
        }
    },[props.clicked])
    console.log("run");
    return (
        <div className={classes["input-field"]}>
            <label 
            htmlFor={props.input.id}>{
                props.input.label    
            }</label>
            <input 
                {...props.input}
                value={amount}
                onChange={changeHandler}
                required
            />
        </div>
    ) 
}

export default Input;