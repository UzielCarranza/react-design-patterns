import {printProps} from './printProps';
import {UserInfo} from '../containerComponents/UserInfo'
import {withUser} from './withUser'

const UserInfoWithLoader = withUser(UserInfo, '1')

function App12() {
    return (
        <UserInfoWithLoader></UserInfoWithLoader>
    )
}

export default App12;