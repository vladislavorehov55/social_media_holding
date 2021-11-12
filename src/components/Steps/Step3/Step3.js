import styles from "./Step3.module.css";
import generalStyles from "../Steps.module.css";
import {Link} from "react-router-dom";
import stepImg from "../../../images/step-img.png"

const Step3 = () => {
    return (
        <div className={styles.wrap}>
            <div>
                <h1 className={`${generalStyles.stepNumber} ${styles.stepNumber}`}>Step 3 </h1>
                <h2 className={`${generalStyles.title} ${styles.title}`}>Amazon Prime</h2>
                <p className={`${generalStyles.text} ${styles.text}`}>Do you have an Amazon Prime account?</p>
                <p className={`${generalStyles.text} ${styles.text}`}>
                    To be able to participate in this giveaway you need to have Amazon Prime.
                </p>
                <div className={styles.btnsWrap}>
                    <button className={`${generalStyles.btn} ${styles.btn}`}>
                        <Link to='/step/4'>
                            Yes, i have
                        </Link>
                    </button>
                    <button className={`${generalStyles.btn} ${styles.btn}`}>
                        <Link to='/'>
                            no, i don’t have
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.imgWrap}>
                <img src={stepImg} alt="img" className={styles.img}/>
            </div>
        </div>
    )
}
export default Step3