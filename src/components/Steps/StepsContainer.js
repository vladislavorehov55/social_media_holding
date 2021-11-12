import styles from './Steps.module.css'
import StepsProgress from "./StepsProgress/StepsProgress";
import Step1 from "./Step1/Step1";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step2 from "./Step2/Step2";
import Step5 from "./Step5/Step5";


const StepsContainer = (props) => {
    const {stepNumber} = props.match.params;
    const renderStepBlock = () => {
        if (stepNumber === '1') return <Step1/>
        if (stepNumber === '2') return <Step2/>
        if (stepNumber === '3') return <Step3/>
        if (stepNumber === '4') return <Step4/>
        if (stepNumber === '5') return <Step5/>

    }
    return (
        <div className={styles.wrap}>
            <StepsProgress stepNumber={stepNumber}/>
            {renderStepBlock()}
        </div>
    )
}
export default StepsContainer