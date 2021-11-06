
const Tertiary = (props) => {
    return (
        <h3 className={props.styling?props.styling : ""}>
            {props.children}
        </h3>
    )
}

export default Tertiary;