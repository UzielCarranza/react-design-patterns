// import {useState} from 'react'
//
// export const FormsCheked = () => {
//     const [checked, setChecked] = useState(false);
//
//     return (
//
//         <div>
//             <input type="checkbox"
//                    value={checked}
//             onChange={() => setChecked((checked) =>!checked)}/>
//             <p>{checked ? "checked" : "not checked"}</p>
//         </div>
//     )
// }


import {useState} from 'react'

export const FormsCheked = () => {
    const [checked, setChecked] = useReducer(() => setChecked((checked) => !checked));

    return (

        <div>
            <input type="checkbox"
                   value={checked}
                   onChange={checked}/>
            <p>{checked ? "checked" : "not checked"}</p>
        </div>
    )
}