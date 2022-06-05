import {UncontrolledOnboardingFlow} from './UncontrolledOnboardingFlow'


const StepOne = ({goToNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({age: 1})}>Next</button>
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

        <button onClick={() => goToNext({hairColor: 'this is a test'})}>Next</button>
    </>
)

function App10() {
    return (
        <UncontrolledOnboardingFlow onFinish={data => {
            console.log(data)
            alert("on boarding complete")
        }}>
            <StepOne/>
            <StepTwo/>
            <StepThree/>
        </UncontrolledOnboardingFlow>
    )
}

export default App10;