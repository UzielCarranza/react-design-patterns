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
import {useState, useEffect} from 'react'

const createArray = (length) => [
    ...Array(length)
]


function Star({selected = false, onSelect}) {
    return <BsStarFill color={selected ? "red" : "grey"}
                       onClick={onSelect}

    />

}

function StarRating({totalStars}) {

    const [selectedStars, setSelecteStars] = useState(0);
    return (
        <>{createArray(totalStars).map((n, i) => (
            <Star key={i} selected={selectedStars > i}
                  onSelect={() => setSelecteStars(i + 1)}></Star>
        ))}
            <p>{selectedStars} of {totalStars}</p>
        </>
    )
}

function Hooks() {
    return <StarRating totalStars={5}/>

}

export default Hooks;