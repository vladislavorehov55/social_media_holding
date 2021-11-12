import styles from './StepsProgress.module.css'
const StepsProgress = (props) => {
    const stepNumber = Number(props.stepNumber)
    const getOuterCircleStyles = (num) => {
        if (num === stepNumber) {
            return styles.outerCircle
        }
        else {
            return styles.outerCircleBorderNone
        }
    }
    const getInnerCircleStyles = (num) => {
        if (num === stepNumber) {
            return `${styles.innerCircle} ${styles.active}`
        }
        else if(num < stepNumber) {
            return `${styles.innerCircle} ${styles.active}`
        }
        return styles.innerCircle
    }

    const getLineStyles = (num) => {
        if (num < stepNumber) {
            return `${styles.line} ${styles.active}`
        }
        else {
            return styles.line
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={getOuterCircleStyles(1)}>
                <div className={getInnerCircleStyles(1)}>1</div>
            </div>

            <div className={getLineStyles(1)}/>

            <div className={getOuterCircleStyles(2)}>
                <div className={getInnerCircleStyles(2)}>2</div>
            </div>

            <div className={getLineStyles(2)}/>


            <div className={getOuterCircleStyles(3)}>
                <div className={getInnerCircleStyles(3)}>3</div>
            </div>

            <div className={getLineStyles(3)}/>


            <div className={getOuterCircleStyles(4)}>
                <div className={getInnerCircleStyles(4)}>4</div>
            </div>

            <div className={getLineStyles(4)}/>

            <div className={getOuterCircleStyles(5)}>
                <div className={getInnerCircleStyles(5)}>5</div>
            </div>
        </div>
    )
}
export default StepsProgress