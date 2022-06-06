import React, {useState, useEffect} from 'react';
import axios from 'axios';


//takes component as argument and id of the user that wants to load
export const withUser = (Component, userId) => {
    return props => {
        const [user, setuser] = useState(null);


        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`)
                setuser(response.data)
            } ) ()
        })
        return <Component {...props} user={user} ></Component>
    }
}