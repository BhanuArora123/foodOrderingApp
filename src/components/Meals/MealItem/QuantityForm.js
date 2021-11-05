import Input from "./Input";
import classes from "./QuantityForm.module.css";

const QuantityForm = props => {
    return (
        <form className={classes["quantityForm"]}>
            <Input 
            input={{
                id:"amount"+props.key,
                type:"number",
                placeholder:0,
                label:"Amount :"
            }}
            />
            <button>
                +Add
            </button>
        </form>
    )
}

export default QuantityForm;