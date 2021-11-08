import ModalBox from "./ModalBox"
import BackDrop from "./BackDrop";
import { Fragment, useContext, useState } from "react";
import ShowContext from "../../store/show-context";
import { CartContextProvider } from "../../store/cart-context";

const Modal = props => {
    const showCtx = useContext(ShowContext);
    if(!showCtx.show){
        return <div></div>
    }
    return (
        <Fragment>
            <ModalBox></ModalBox>
            <BackDrop></BackDrop>
        </Fragment>
    )
}

export default Modal;