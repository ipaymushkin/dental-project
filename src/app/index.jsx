import { Header } from "../modules/Header"
import { useFormApp } from "../stores/app";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";
import styles from './style.module.css';

export const App = () => {

    const { step } = useFormApp();

    return (<>
        <Header />
        <div className={styles.wrapper}>
            {step === 0 && <Step1 />}
            {step === 1 && <Step2 />}
            {step === 2 && <Step3 />}
            {step === 3 && <Step4 />}
            {step === 4 && <Step5 />}
            {step === 5 && <Step6 />}
        </div>
    </>)
}