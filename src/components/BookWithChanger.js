import React from 'react'

import Book from './Book'
import ShelfChangerButton from './ShelfChangerButton'

const BookWithChanger = props => (
    <Book
        coverWidth={props.coverWidth}
        coverHeight={props.coverHeight}
        coverImageSource={props.coverImageSource}
        title={props.title}
        authors={props.authors}>
        <ShelfChangerButton 
            currentShelf={props.currentShelf}
            shelfOptions={props.shelfOptions}
            onChangeShelf={props.onChangeShelf}
            />
    </Book>
)

export default BookWithChanger