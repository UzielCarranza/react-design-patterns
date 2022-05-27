import './App.css';
import {SplitScreen} from "./SplitScreen";

const LeftHandComponent = () => {
    return <h1 style={{backgroundColor: 'green'}}>Some left content</h1>
}
const RightHandComponent = () => {
    return <h1 style={{backgroundColor: 'red'}}>Some right content</h1>
}

function App() {
    return (
        <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        />
    )
}

export default App;
