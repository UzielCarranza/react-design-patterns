import {UserInfo} from '../containerComponents/UserInfo';
import {ProductInfo} from '../containerComponents/ProductInfo';
import {DataSource} from './DataSource'
import axios from 'axios';

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;

}


const getLocalStorageData = key => () => {
    return localStorage.getItem(key)
}

const Text = ({ message }) => <h1>{message}</h1>;



function App5() {
    return (
        <>
            <DataSource getDataFunc={getServerData('/users/1')} resourceName="user" >
                <UserInfo></UserInfo>
            </DataSource>

            <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
                <Text/>
            </DataSource>
        </>
    )
}

export default App5;