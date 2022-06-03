import {CurrentUserLoader} from './CurrentUserLoader'
import {UserInfo} from './UserInfo';

function ContainerApp(){
    return (
        <CurrentUserLoader>
            <UserInfo></UserInfo>
        </CurrentUserLoader>
    )
}
export default ContainerApp;