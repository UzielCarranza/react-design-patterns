import {printProps} from './printProps';
import {UserInfo} from '../containerComponents/UserInfo'

const UserInfoWrapped = printProps(UserInfo)

function App12() {
    return (
        <UserInfoWrapped a={1} b="hello" c={{name: "john"}}></UserInfoWrapped>
    )
}

export default App12;