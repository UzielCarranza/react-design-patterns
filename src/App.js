import './App.css';
import {SplitScreen} from "./SplitScreen";

const LeftHandComponent = ({name}) => {
    return <h1 style={{backgroundColor: 'green'}}>Some left content {name}</h1>
}
const RightHandComponent = ({message}) => {
    return <h1 style={{backgroundColor: 'red'}}>Some right content {message}</h1>
}

function App() {
    return (
        <SplitScreen
            left={LeftHandComponent}
            right={RightHandComponent}
        >
            <LeftHandComponent name="Left component"/>
            <RightHandComponent message="right component"/>
        </SplitScreen>
    )
}

export default App;
