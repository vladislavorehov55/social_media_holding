import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.links}>
                <div className={styles.col1}>
                    <h1 className={styles.colTitle}>Privacy and Terms</h1>
                    <div className={styles.link}>Privacy Policy</div>
                    <div className={styles.link}>Terms of use</div>
                </div>
                <div className={styles.col2}>
                    <h1 className={styles.colTitle}>Need Help?</h1>
                    <div className={styles.link}>mail@gmail.com</div>
                </div>
                <div className={styles.col3}>
                    <h1 className={styles.colTitle}>Social</h1>
                    <div className={styles.link}>Facebook</div>
                    <div className={styles.link}>Instagram</div>
                </div>
            </div>
            <div className={styles.copyright}>© All Rights Reserved</div>
        </footer>
    )
}
export default Footer