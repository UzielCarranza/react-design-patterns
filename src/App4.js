import {UserInfo} from './containerComponents/UserInfo';
import {ProductInfo} from './containerComponents/ProductInfo';
import {ResourceLoader} from './ResourceLoader';
import {ProducInfo} from './containerComponents/ProductInfo'


function App4() {
    return (
        <>
            <ResourceLoader resourceUrl="/users/2" resourceName="user">
                <UserInfo/>
            </ResourceLoader>
            <ResourceLoader resourceUrl="/products/12" resourceName="product">
                <ProductInfo/>
            </ResourceLoader>
        </>
    )
}

export default App4;