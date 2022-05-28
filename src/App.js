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


// STARTS LIST, LIST ITEMS LESSON

const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: [
        'swimming', 'biking', 'videogames'
    ],
}{
    name: 'Brenda Smith',
    age: 22,
    hairColor: 'red',
    hobbies: ['singing', 'dancing', 'videogames'],

}];

const products = [{
    name: "TV",
    price: '300',
    description: 'huge TV'
},
    {
        name: "basketball",
        price: '30',
        description: 'ball'

    }

]

