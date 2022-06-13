import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUser = userId => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);
    //useEffect will refresh and reload the user if the id of the user changes

    return user;
}