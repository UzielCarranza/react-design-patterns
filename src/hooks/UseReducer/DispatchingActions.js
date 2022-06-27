import {useReducer} from 'react';

const initialState = {
    message: "hello",
}


function reducer(state, action) {
    switch (action.type) {
        case "yell":
            return {
                message: "HEY",
            };
        case "whisper":
            return {
                message: "excuse me"
            };
    }
}


export const DispatchingActions = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (

        <>
            <p>Message: {state.message}</p>

            <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
            <button onClick={() => dispatch({type: "yell"})}>Yell</button>
        </>
    )
}
