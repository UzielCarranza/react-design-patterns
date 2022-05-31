// STARTS LIST, LIST ITEMS LESSON

import React from "react";
import {RegularList} from "./RegularList"
import {SmallPersonListItem} from "./people/SmallPersonListItem"

import {NumberedList} from "./NumberedList"

import {LargePersonListItem} from "./people/LargePersonListItem"

import {SmallProductListItem} from "./products/SmallProductListItem"
import {LargeProductListItem} from "./products/LargeProductListItem"

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
            <NumberedList items={products}
                          resourceName={'product'}
                          itemComponent={LargeProductListItem}></NumberedList>
            <NumberedList items={products}
                          resourceName={'product'}
                          itemComponent={SmallProductListItem}></NumberedList>
        </>
    )
}

export default App2;