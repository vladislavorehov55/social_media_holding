import styles from "./Step2.module.css";
import generalStyles from "../Steps.module.css";
import {Link} from "react-router-dom";
import stepImg from "../../../images/step2-img.png"
import redArrow from "../../../images/press-here-img.png";
import redArrowReverse from "../../../images/red-arrow-reverse.png";
const Step2 = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.infoBlock}>
                <h1 className={`${generalStyles.stepNumber} ${styles.stepNumber}`}>Step 2 </h1>
                <h2 className={`${generalStyles.title} ${styles.title}`}>Share Facebook post</h2>
                <p className={`${generalStyles.text} ${styles.text}`}>
                    To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!
                </p>
            </div>
            <div className={styles.imgWrap}>
                <img src={stepImg} alt="img" className={styles.img}/>
            </div>
            <div className={styles.redArrowBlock}>
                <img src={redArrow} alt="press here" className={styles.pressHereImg}/>
                <img src={redArrowReverse} alt="red-arrow icon" className={styles.redArrowReverse}/>
                <span className={styles.pressHereText}>Press here</span>
            </div>

            <button className={`${generalStyles.btn} ${styles.btn}`}>
                <Link to='/step/3'>continue</Link>
            </button>



        </div>
    )
}
export default Step2