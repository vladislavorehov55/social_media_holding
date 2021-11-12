import styles from './Explanation.module.css';
import arrowImg from '../../images/arrow.png'
const Explanation = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>How does it work?</h1>

            <ul className={styles.list}>

                <li className={styles.listItem}>
                    <div className={styles.circleBlock1}>
                        <span className={styles.circleBlockText}>Easy as <br/>1-2-3</span>
                    </div>
                </li>

                <li className={styles.listItem}>
                    <img src={arrowImg} alt="arrow-icon"/>
                </li>

                <li className={styles.listItem}>
                    <div className={styles.circleBlock2}/>
                    <p className={styles.listItemImgLabel}>Choose product</p>
                </li>

                <li className={styles.listItem}>
                    <img src={arrowImg} alt="arrow-icon"/>
                </li>

                <li className={styles.listItem}>
                    <div className={styles.circleBlock3}/>
                    <p className={styles.listItemImgLabel}>Buy product</p>
                </li>

                <li className={styles.listItem}>
                    <img src={arrowImg} alt="arrow-icon"/>
                </li>

                <li className={styles.listItem}>
                    <div className={styles.circleBlock4}/>
                    <p className={styles.listItemImgLabel}>Test and share review</p>
                </li>

                <li className={styles.listItem}>
                    <img src={arrowImg} alt="arrow-icon"/>
                </li>

                <li className={styles.listItem}>
                    <div className={styles.circleBlock5}/>
                    <p className={styles.listItemImgLabel}>Get 100% money back</p>
                </li>
            </ul>

        </div>
    )
}
export default Explanation