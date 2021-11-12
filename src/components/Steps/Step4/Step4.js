
import styles from "./Step4.module.css";
import generalStyles from "../Steps.module.css";
import {Link} from "react-router-dom";
import stepImg from "../../../images/step-img.png"

const Step4 = () => {
    return (
        <div className={styles.wrap}>
            <div>
                <h1 className={`${generalStyles.stepNumber} ${styles.stepNumber}`}>Step 4</h1>
                <h2 className={`${generalStyles.title} ${styles.title}`}>How to Buy a Product with 100% BONUS!</h2>
                <div className={styles.textWrap}>
                    <div className={styles.listNumber}>1</div>
                    <span className={`${generalStyles.text}`}>You need to Buy our Product on Amazon at the specified price $20.89!</span>
                </div>

                <div className={styles.textWrap}>
                    <div className={styles.listNumber}>2</div>
                    <span className={`${generalStyles.text}`}>
                        After the purchase - Send us your Order Number or the Screenshot to our manager in FB Messenger
                    </span>
                </div>

                <div className={styles.textWrap}>
                    <div className={styles.listNumber}>3</div>
                    <span className={`${generalStyles.text}`}>
                        When you receive the product please use it and share product reviews
                    </span>
                </div>

                <div className={styles.textWrap}>
                    <div className={styles.listNumber}>4</div>
                    <span className={`${generalStyles.text}`}>
                        We will send <span className={styles.textBold}>you the 25$ Amazon Gift Card</span> code within 24 hours after we get short review from you.
                    </span>
                </div>

                <div className={styles.textWrap}>
                    <div className={styles.listNumber}>5</div>
                    <span className={`${generalStyles.text}`}>
                        As a result, you will receive our Product Free!
                    </span>
                </div>
                <button className={`${generalStyles.btn} ${styles.btn}`}>
                    <Link to='/step/5'>
                        Get Offer
                    </Link>
                </button>


                <div className={styles.rejectText}>I don't like offer terms</div>
            </div>
            <div className={styles.imgWrap}>
                <img src={stepImg} alt="img" className={styles.img}/>
            </div>
        </div>
    )
}
export default Step4