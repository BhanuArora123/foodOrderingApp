import ModalBox from "./ModalBox"
import BackDrop from "./BackDrop";
import { Fragment, useState } from "react";

const Modal = props => {
    if(!props.show){
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