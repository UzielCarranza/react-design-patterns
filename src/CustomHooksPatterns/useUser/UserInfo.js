import {useUser} from './useUser'

export const UserInfo = ({userId}) => {
    const user = useUser(userId);
    const {name, age, hairColor, hobbies} = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>age: {age} years</p>
            <p>hair color: {hairColor}</p>
            <p>hobbies</p>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading</p>
}