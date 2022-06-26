import {useState} from 'react'

export const FormsCheked = () => {
    const [checked, setChecked] = useState(false);

    return (

        <div>
            <input type="checkbox"
                   value={checked}
            onChange={() => setChecked((checked) =>!checked)}/>
            <p>{checked ? "checked" : "not checked"}</p>
        </div>
    )
}