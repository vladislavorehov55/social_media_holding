import styles from './Header.module.css';
import logo from '../../images/header-logo.png';
const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.title}>Autumn Giveaways for FREE</h1>
                <p className={styles.text}>Participate in Autumn Giveaway and treat yourself to nice and refreshing cosmetics for free</p>
            </div>
            <img src={logo} alt="logo" className={styles.logo}/>

        </header>
    )
}
export default Header