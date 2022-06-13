import {ProductInfo} from './ProductInfo'
import {UserInfo} from './UserInfo'

function App21() {
    return (
        <>

            <h1>--------------</h1>
            <h1>Custom hook to load any type of resource</h1>
            <UserInfo userId="1"/>
            <ProductInfo productId="1234"/>

            <h1>--------------</h1>
        </>

    )
}

export default App21;