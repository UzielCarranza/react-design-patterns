import {useState} from 'react';
import {ControlledBoardingFlow} from './ControlledBoardingFlow';

const StepOne = ({goToNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({age: 63})}>Next</button>
    </>
)
const StepTwo = ({goToNext}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({name: 'test'})}>Next</button>
    </>
)
const StepThree = ({goToNext}) => (
    <>
        <h1>Step 3</h1>
        <p>You qualify for it</p>
        <button onClick={() => goToNext({})}>Next</button>
    </>
)

const StepFour = ({goToNext}) => (
    <>
        <h1>Step 4</h1>

        <button onClick={() => goToNext({hairColor: 'this is a test'})}>Next</button>
    </>
)

function App11() {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const onNext = stepData => {
        setOnboardingData({...onboardingData, ...stepData});
        setCurrentIndex(currentIndex + 1);
    }
    return (
        <ControlledBoardingFlow

            currentIndex={currentIndex}
            onNext={onNext}
        >
            <StepOne/>
            <StepTwo/>
            {onboardingData.age > 62 &&
                <StepThree/>
            }
            <StepFour></StepFour>
        </ControlledBoardingFlow>
    )
}

export default App11;