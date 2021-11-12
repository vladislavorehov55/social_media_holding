import styles from "./Step5.module.css";
import generalStyles from "../Steps.module.css";
import {Link} from "react-router-dom";
import stepImg from "../../../images/step-img.png"

const Step5 = () => {
    return (
        <div className={styles.wrap}>
            <div>
                <h1 className={`${generalStyles.stepNumber} ${styles.stepNumber}`}>Step 5</h1>
                <h2 className={`${generalStyles.title} ${styles.title}`}>Buy and Provide order ID to our Manager</h2>
                <p className={`${generalStyles.text} ${styles.text}`}>
                    Click the button <span className={styles.textBold}>GO TO AMAZON</span> and <span className={styles.textBold}>Buy a Product</span>
                </p>
                <button className={`${generalStyles.btn} ${styles.btn}`}>
                    <Link to='/'>
                        Go to amazon
                    </Link>
                </button>
                <p className={`${generalStyles.text} ${styles.text}`}>
                    Click on the button below and <span className={styles.textBold}>Provide Order ID to our Manager</span> in FB Messenger
                </p>
                <p className={styles.textSmall}>(If you have any questions, you can ask them to our Manager)</p>

                <button className={`${generalStyles.btn} ${styles.btn}`}>
                    <Link to='/'>
                        provide order id
                    </Link>
                </button>
            </div>
            <div className={styles.imgWrap}>
                <img src={stepImg} alt="img" className={styles.img}/>
            </div>
        </div>
    )
}
export default Step5