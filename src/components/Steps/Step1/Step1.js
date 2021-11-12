import generalStyles from "../Steps.module.css";
import styles from './Step1.module.css';
import {Link} from "react-router-dom";
import stepImg from '../../../images/step-img.png'

const Step1 = () => {
    return(
        <div className={styles.wrap}>
            <div>
                <h1 className={`${generalStyles.stepNumber} ${styles.stepNumber}`}>Step 1</h1>
                <h2 className={`${generalStyles.title} ${styles.title}`}>Lorem ipsum dolor sit amet</h2>
                <p className={`${generalStyles.text} ${styles.text}`}>
                    Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:
                </p>
                <ol className={styles.list}>
                    <li className={generalStyles.text}>Mauris rutrum interdum condimentum.</li>
                    <li className={generalStyles.text}>Donec commodo quis arcu eget pretium.</li>
                </ol>
                <button className={`${generalStyles.btn}`}>
                    <Link to='/step/2'>Agree and continue</Link>
                </button>
            </div>
            <div className={styles.imgWrap}>
                <img src={stepImg} alt="img" className={styles.img}/>
            </div>

        </div>
    )
}
export default Step1