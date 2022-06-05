import {UserInfo} from './containerComponents/UserInfo';
import {ProductInfo} from './containerComponents/ProductInfo';
import {ResourceLoader} from './ResourceLoader';


function App4() {
    return (
        <>
            <ResourceLoader resourceUrl="/users/2" resourceName="user">
                <UserInfo/>
            </ResourceLoader>
        </>
    )
}

export default App4;