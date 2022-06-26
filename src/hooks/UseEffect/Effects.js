import {useState, useEffect} from 'react'

function Effects() {

    const [name, setName] = useState("Gym");

    useEffect(() => {

    })

    return (
        <section>
            <p>congratulations {name}</p>
            <button onClick={() => setName("Will")}>change Winner</button>
        </section>
    )
}

export default Effects;