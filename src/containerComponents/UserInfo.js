export const userInfo = ({user}) => {
    const {name, age, hairColor, hobbies} = user;

    return (
        <>
            <h3>{name}</h3>
            <p>age: {age} years</p>
            <p>hair color: {hairColor}</p>
            <p>hobbies</p>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    )
}