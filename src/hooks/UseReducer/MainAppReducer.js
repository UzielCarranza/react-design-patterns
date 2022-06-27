import {Reducer} from './Reducer'
import {DispatchingActions} from './DispatchingActions'

function MainAppReducer() {
    return (
        <><h1>counter</h1>

            <Reducer></Reducer>
            <p>----------</p>
            <DispatchingActions/>
        </>

    )
}


export default MainAppReducer;