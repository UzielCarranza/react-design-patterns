// STARTS LIST, LIST ITEMS LESSON

import React from "react";
import {RegularList} from "./RegularList"
import {SmallPersonListItem} from "./people/SmallPersonListItem"

import {LargePersonListItem} from "./people/LargePersonListItem"

const people = [
    {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: [
            'swimming', 'biking', 'videogames'
        ]
    },
    {
        name: 'Brenda Smith',
        age: 22,
        hairColor: 'red',
        hobbies: ['singing', 'dancing', 'videogames'],

    }];

const products = [{
    name: "TV",
    price: '300',
    description: 'huge TV'
},
    {
        name: "basketball",
        price: '30',
        description: 'ball'

    },
]

function App2() {
    return (
        <>
        <RegularList items={people}
                     resourceName={'person'}
                     itemComponent={SmallPersonListItem}></RegularList>
    <RegularList items={people}
                 resourceName={'person'}
                 itemComponent={LargePersonListItem}></RegularList>
        </>
)
}

export default App2;