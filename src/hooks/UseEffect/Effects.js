import {useState, useEffect} from 'react'

function Effects() {

    const [name, setName] = useState("Gym");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {

        console.log(`celebreate ${name}`)
    }, [name])

    useEffect(() => {
        console.log(`user is ${admin ? admin : "not admin"}`)
    }, [admin])

    return (
        <section>
            <p>congratulations {name}</p>
            <button onClick={() => setName("Will")}>change Winner</button>
            <p>{admin ? " logged in" : "not logged in"}</p>
            <button onClick={() => setAdmin(true)}>log in</button>
        </section>
    )
}

export default Effects;