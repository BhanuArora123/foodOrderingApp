import Card from "../UI/Card";


const CartItem = (props) => {
    return (
        <Card>
            <div>
                <div>
                    { props.name }
                </div>
                <div>
                    <div>{ props.price }</div>
                    <div>x {props.qty}</div>
                </div>
            </div>
            <div>{ props.price * props.qty }</div>
        </Card>
    )
}

export default CartItem;