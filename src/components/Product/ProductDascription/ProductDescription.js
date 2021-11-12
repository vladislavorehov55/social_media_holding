import styles from './ProductDescription.module.css';
import star from '../../../images/star.png';
import amazonLogo from '../../../images/amazon_prime_logo.png';
import {Link} from "react-router-dom";

const ProductDescription = () => {
    return(
        <div className={styles.wrap}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>BEST SELLER</span>
                <div>
                    <img src={star} alt="star-icon"/>
                    <img src={star} alt="star-icon"/>
                    <img src={star} alt="star-icon"/>
                    <img src={star} alt="star-icon"/>
                    <img src={star} alt="star-icon"/>
                    <span className={styles.reviews}>(1731 reviews)</span>
                </div>
            </div>
            <h1 className={styles.title}>Acne Treatment Cystic Acne heals, repairs & renews</h1>
            <span className={styles.description}>Description:</span>
            <p className={styles.text}>Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>
            <div className={styles.left}>items left: 12</div>

            <div className={styles.costsWrap}>
                <span className={styles.costBefore}>us$25.89</span>
                <span className={styles.costNow}>$0.00 FREE</span>
            </div>

            <div className={styles.block}>
                <button className={styles.btn}>
                    <Link to='/step/1'>SELECT</Link>
                </button>
                <img src={amazonLogo} alt="amazon-logo" className={styles.logo}/>
            </div>


        </div>
    )
}
export default ProductDescription