export const Deliver = () => {
    const [deliver, setDelivered] = useState("Not delivered")

    return (
        <div>
            <h1>The package is: {status}</h1>
            <button onClick={() => setDelivered("delivered")}/>
        </div>
    )
}