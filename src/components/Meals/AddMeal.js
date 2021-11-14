import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./AddMeal.module.css";
import { useState } from "react";

const AddMeal = (props) => {
    const [title, setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [price , setPrice] = useState("");
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const descHandler = (event) => {
        setDesc(event.target.value);
    }
    const priceHandler = (event) => {
        setPrice(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.addMeal({
            title:title,
            desc:desc,
            price:price,
            key:props.total
        })
    }
    return (
        <form className={classes["addMealForm"]} onSubmit={submitHandler}>
            <div className={classes["input-wrapper"]}>
                <h1>Add Meals here</h1>
            </div>
            <div className={classes["input-wrapper"]}>
                <label className={classes["labelField"]}>Title</label>
                <input
                    type="text"
                    placeholder="enter title here"
                    className={classes["inputField"]}
                    value={title}
                    onChange={titleHandler}
                ></input>
            </div>
            <div className={classes["input-wrapper"]}>
                <label className={classes["labelField"]}>Description</label>
                <input
                    type="text"
                    placeholder="enter description here"
                    className={classes["inputField"]}
                    value={desc}
                    onChange={descHandler}
                ></input>
            </div>
            <div className={classes["input-wrapper"]}>
                <label className={classes["labelField"]}>Price</label>
                <input
                    type="number"
                    placeholder="enter price here"
                    className={classes["inputField"]}
                    value={price}
                    onChange={priceHandler}
                ></input>
            </div>
            <div className={classes["input-wrapper"]}>
                <button className={classes["btn"]}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add</span>
                </button>
            </div>
        </form>
    )
}

export default AddMeal;