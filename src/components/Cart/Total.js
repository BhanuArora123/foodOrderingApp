import { Fragment } from "react/cjs/react.production.min"
import Tertiary from "../Headings/Tertiary";

const Total = props => {
    return (
        <Fragment>
            <div>
                <Tertiary>Total Amount</Tertiary>
                <div>
                    { props.totalPrice }
                </div>
            </div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>
        </Fragment>
    )
}

export default Total;