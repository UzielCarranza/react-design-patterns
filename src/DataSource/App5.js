import {UserInfo} from '../containerComponents/UserInfo';
import {ProductInfo} from '../containerComponents/ProductInfo';
import {DataSource} from './DataSource'
import axios from 'axios';

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;

}

function App5() {
    return (
        <>
            <DataSource getDataFunc={getServerData('/users/1')} resourceName="user" >
                <UserInfo></UserInfo>
            </DataSource>
        </>
    )
}

export default App5;