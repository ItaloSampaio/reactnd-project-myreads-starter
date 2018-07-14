import React from 'react'

const data = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
]

const withShelves = InnerComponent => props => (
    <InnerComponent 
        {...props}
        shelves={data}
        />
)

export default withShelves