import React from 'react'

const data = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
]

export default function WithShelves(InnerComponent) {
    return props => (
        <InnerComponent 
            {...props}
            shelves={data}
            />
    )
}