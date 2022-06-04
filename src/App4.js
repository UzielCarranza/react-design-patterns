import {CurrentUserLoader} from './CurrentUserLoader'
import {UserInfo} from './UserInfo';

import {ProductIndo} from './containerComponents/ProductInfo';
import {UserLoader} from './UserLoader'
import {ResourceLoader} from './ResourceLoader';


function App4() {
    return (
        <ResourceLoader resourceUrl="/users/1" resourceName="users">
            <UserInfo/>
        </ResourceLoader>
    <ResourceLoader resourceUrl="/products/21" resourceName="product">
        <ProductInfo/>
    </ResourceLoader>
    )
}

export default App4;