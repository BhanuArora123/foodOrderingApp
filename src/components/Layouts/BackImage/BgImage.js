import Image from "./Image";
import classes from "./BgImage.module.css";

const BgImage = (props) => {
    return (
        <section className={classes["bgImage"]}>
            <Image 
                width="100%" 
                height="100%" 
            />
        </section>
    )
}

export default BgImage;