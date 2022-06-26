// import {Deliver} from './Deliver'
// import {FormsCheked} from './FormsCheked'
// function Hooks() {
//     return (
//         <>
//             <Deliver/>
//             <FormsCheked/>
//         </>
//     )
// }
//
// export default Hooks

import {BsStarFill} from 'react-icons/bs';

const createArray = (length) => [
    ...Array(length)
]


function Star({selected = false}) {
    return <BsStarFill color={selected ? "red" : "grey"}/>

}

function StarRating({totalStars}) {
    return createArray(totalStars).map((n, i) => (
        <Star key={i}></Star>
    ))
}

function Hooks() {
    return <StarRating totalStars={10}/>

}

export default Hooks;