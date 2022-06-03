import {CurrentUserLoader} from './CurrentUserLoader'
import {UserInfo} from './UserInfo';
import {UserLoader} from './UserLoader'

function ContainerApp(){
    return (
        <UserLoader userId="3">
            <UserInfo></UserInfo>
        </UserLoader>
    )
}
export default ContainerApp;