import {useState, useEffect} from 'react';
import axios from 'axios';
import * as assert from "assert";


export const useCurrentUser = () => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
        })();
    }, []);

    return user;
}

const currentUser = useCurrentUser();
