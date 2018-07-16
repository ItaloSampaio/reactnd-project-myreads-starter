import React from 'react'

import BookWithChanger from '../../components/BookWithChanger'
import Loading from '../../components/Loading'
import withShelves from '../../components/withShelves'

import Bar from './Bar'
import BooksContent from './BooksContent'
import Bookshelf from './Bookshelf'
import OpenSearchButton from './OpenSearchButton'

import * as BooksAPI from '../../api/BooksAPI'
import { handleNetworkError } from '../../utils'

class MainPage extends React.Component {
    state = {
        books: [],
        loading: true
    }

    render() {
        const { shelves } = this.props
        const { loading } = this.state

        return (
            <div>
                <Bar />
                <BooksContent>
                    {loading
                        ? <Loading />
                        : shelves.map(this.renderShelf)
                    }
                </BooksContent>
                <OpenSearchButton onClick={this.goToSearchPage} />
            </div>
        )
    }

    renderShelf = shelfData => {
        const { shelves } = this.props
        const { books } = this.state

        const filteredBooks = this.getBooksDataByShelf(shelfData.id, books)

        return (
            <Bookshelf
                key={shelfData.id}
                title={shelfData.title}>
                {filteredBooks.map(book =>
                    <BookWithChanger
                        key={book.id}
                        coverWidth={128}
                        coverHeight={193}
                        coverImageSource={book.imageLinks.thumbnail}
                        title={book.title}
                        authors={book.authors.join(', ')}
                        currentShelf={book.shelf}
                        shelfOptions={shelves}
                        onChangeShelf={this.handleShelfChange(book)}
                        />
                )}
            </Bookshelf>
        )
    }

    getBooksDataByShelf = (shelfId, books) => {
        return books.filter(book => book.shelf === shelfId)
    }

    goToSearchPage = () => {
        this.props.history.push('/search')
    }

    handleShelfChange = targetBook => async targetShelf => {
        //Hold the old state to rollback if it's not possible to update the book in the API
        const oldBooks = this.state.books
        
        const books = oldBooks.map(book => {
            return book.id === targetBook.id
                ?  { ...book, shelf: targetShelf }
                : book
        })
        //Render optimistic result
        this.setState({ books })
        
        try {
            await BooksAPI.update(targetBook, targetShelf)
        }
        catch(err) {
            const errorMessage = await handleNetworkError(err)
            alert(errorMessage) // =(
            //Rollback
            this.setState({ books: oldBooks })            
        }
    }

    async componentDidMount() {
        try {
            const books = await BooksAPI.getAll()
            this.setState({ books })
        }
        catch(err) {
            const errorMessage = await handleNetworkError(err)
            alert(errorMessage) // =(
        }
        finally {
            this.setState({ loading: false })
        }
    }
}

export default withShelves(MainPage)