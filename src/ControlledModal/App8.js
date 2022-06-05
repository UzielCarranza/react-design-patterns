import {useState} from 'react';
import {ControlledModal} from "./ControlledModal";


function App8() {
    const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <>
            <ControlledModal
                shouldShow={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
            />
            <button
                onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Modal' : 'Show Modal'}</button>
        </>
    )
}

export default App8;