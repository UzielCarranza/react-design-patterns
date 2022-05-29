export const LargePersonListItem = ({ person }) => {
    const {name, age, haircolor, hobbies} = person;
    return (
        <>
        <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Hair color: {haircolor}</p>
            <p>Hobbies: </p>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    )
}