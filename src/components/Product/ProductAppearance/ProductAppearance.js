import SliderContainer from "./SliderContainer/SliderContainer"
import styles from './ProductAppearance.module.css'
import {useState} from "react";
import img from "../../../images/img1.png"
const ProductAppearance = () => {
    const [imgBig, setImgBig] = useState(img)
    const changeImg = (img) => {
        setImgBig(img)
    }
    return(
        <div className={styles.wrap}>
            <SliderContainer changeImg={changeImg}/>
            <img src={imgBig} alt="img" className={styles.imgBig}/>
        </div>
    )
}
export default ProductAppearance