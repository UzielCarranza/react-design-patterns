import {UserInfo} from '../containerComponents/UserInfo';
import {ProductInfo} from '../containerComponents/ProductInfo';
import {DataSource} from './DataSource'
import axios from 'axios';


function App5() {
    return (
        <>
            <DataSource getDataFunc={async () => {
                const response = await axios.get('/users/1');
                return response.data;

            }} resourceName="user" >
                <UserInfo></UserInfo>
            </DataSource>
        </>
    )
}

export default App5;