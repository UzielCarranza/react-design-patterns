import {useDataSource} from './useDataSource';
import axios from 'axios';


const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl)
    return response.data;
}

const localStorageResource = key => () => {
    return localStorage.getItem(key)
}

export const UserInfo = ({userId}) => {
    const user = useDataSource(serverResource(`/users/${userId}`))
    const message = useDataSource(localStorageResource('message'))

    const {name, age, hairColor, hobbies} = user || {};

    return user ? (
        <>

            <h1>--------------</h1>
            <h1>UseDataSource</h1>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
            <h2>message: {message}</h2>

            <h1>--------------</h1>
        </>
    ) : <p>Loading...</p>;
}