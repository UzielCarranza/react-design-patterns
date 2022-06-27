import {useState, useEffect, useReducer} from 'react'

function Reducer() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );

    return (
        <h1 onClick={() => setNumber(1)}>{number}</h1>
    )
}

export default Reducer;