import styles from './Slider.module.css';
import arrowUp from '../../../../../images/arrow-up.png';
import arrowDown from '../../../../../images/arrow-down.png';

const Slider = ({images, activeImgInd, changeActiveImgByArrow, changeActiveImg}) => {
    return (
        <div className={styles.slider}>
            <img src={arrowUp} alt="up" className={styles.arrowImgUp}
                 onClick={changeActiveImgByArrow.bind(null, 'up')}/>
            {
                images.map((img, ind) => (
                    <div className={`${styles.imgWrap} ${ind === activeImgInd ? styles.activeImg : ''}`}
                         key={ind} onClick={changeActiveImg.bind(null, ind)}>
                        <img src={img} alt="img" className={styles.img}/>
                    </div>)
                )
            }

            <img src={arrowDown} alt="down" className={styles.arrowImgDown}
                 onClick={changeActiveImgByArrow.bind(null, 'down')}/>
        </div>
    )
}
export default Slider