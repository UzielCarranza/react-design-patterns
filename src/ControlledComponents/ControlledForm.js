import {useState, useEffect} from 'react';


export const ControlledForm = () => {
    const [inputError, setInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setInputError("name must be more than 2 characters")
        } else {
            setInputError("")
        }
}, [name]
)
return (
    <form>
        {inputError && <p>{inputError}< /p>}
            <input name="name2" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>

            <input name="age2" type="number" placeholder="Age2" value={age}
            onChange={e => setAge(Number(e.target.value))}/>

            <input name="hair color2" type="text" placeholder="Hair color" value={hairColor}
            onChange={e => setHairColor(e.target.value)}/>
            <button>Submit</button>
            </form>
            )
        }