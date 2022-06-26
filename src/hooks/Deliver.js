import {useState} from 'react'

export const Deliver = () => {
    const [deliver, setDelivered] = useState("Not delivered")

    return (
        <div>
            <h1>The package is: {deliver}</h1>
            <button onClick={() => setDelivered("delivered")}>set to delivered </button>
        </div>
    )
}