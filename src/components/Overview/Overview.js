import styles from './Overview.module.css'
import {useState} from "react";

const Overview = () => {
    const [isOpenMore, setIsOpenMore] = useState(false);
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Overview</h1>
            <span className={styles.questionText}>Who It's For</span>
            <p className={styles.text}>Very Dry, Dry, Dry Combination Skin (Type 1, 2)</p>
            <span className={styles.questionText}>What It Is</span>
            <p className={styles.text}>Step 3 in our customized 3-Step Skincare System.
                Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.
            </p>
            <span className={styles.questionText}>What It Does</span>
            <ul className={styles.list}>
                <li className={styles.listItem}>Silky lotion delivers 8-hour hydration.</li>
                <li className={styles.listItem}>Slips on easily, absorbs quickly.</li>
                <li className={styles.listItem}>Helps strengthen skin’s own moisture barrier so more moisture stays in.
                    Skin that holds onto moisture has a youthful-looking glow.
                </li>
            </ul>
            <div className={!isOpenMore ? styles.moreBlock : styles.hideBlock}
                 onClick={() => setIsOpenMore(true)}>
                Read more...
            </div>
            <div className={isOpenMore ? '' : styles.hideBlock}>
                <span className={styles.questionText}>Key Ingredients</span>
                <p className={styles.text}>
                    Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier,
                    improve its resiliency, and balance and retain skin’s moisture levels. Hyaluronic acid acts as a
                    natural moisture magnet/humectant.
                </p>
            </div>
        </div>
    )
}
export default Overview