import React from 'react'

const data = [
    { id: 'currentlyReading', title: 'Currently Reading', iconName: 'glasses' },
    { id: 'wantToRead', title: 'Want to Read', iconName: 'thumbtack' },
    { id: 'read', title: 'Read', iconName: 'check' }
]

const withShelves = InnerComponent => props => (
    <InnerComponent 
        {...props}
        shelves={data}
        />
)

export default withShelves