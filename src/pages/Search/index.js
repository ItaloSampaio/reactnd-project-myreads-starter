import React from 'react'
import { debounce } from 'lodash'

import BooksGrid from '../../components/BooksGrid'
import Book from '../../components/Book'
import Loading from '../../components/Loading'

import Bar from './Bar'
import ResultsContent from './ResultsContent'

import withShelves from '../withShelves'

import * as BooksAPI from '../../api/BooksAPI'
import { handleNetworkError } from '../../utils'

class SearchPage extends React.Component {
    state = {
        books: [],
        currentBooks: [],
        loading: false
    }

    render() {
        return (
            <div>
                <Bar 
                    onCloseButtonClick={this.goToMainPage}
                    onTermsChange={this.handleTermsChange}
                    />
                <ResultsContent>
                    <BooksGrid>
                        {this.state.loading 
                            ? <Loading />
                            : this.renderSearchResult()
                        }
                    </BooksGrid>
                </ResultsContent>
            </div>
        )
    }

    renderSearchResult = () => {
        return this.state.books.map(book => 
            <Book
                key={book.id}
                coverWidth={128}
                coverHeight={193}
                coverImageSource={book.imageLinks.thumbnail}
                title={book.title}
                authors={(book.authors || []).join(', ')}
                currentShelf={book.shelf || 'none'}
                shelves={this.props.shelves}
                onChangeShelf={this.handleShelfChange(book)}
                />
        )
    }

    goToMainPage = () => {
        this.props.history.push('/')
    }

    handleTermsChange = debounce(async terms => {
        try {
            if(!terms)
                return this.setState({ books: [] })

            this.setState({ loading: true })

            const result = await BooksAPI.search(terms)

            if(result instanceof Array) {
                //Merge result with current books
                const books = result.map(targetBook => {
                    const alreadySelectedBook = this.state.currentBooks.find(book => 
                        book.id === targetBook.id
                    )

                    return alreadySelectedBook || targetBook
                })

                this.setState({ books })
            }
            
            else this.setState({ books: [] })
        }
        catch(err) {
            const errorMessage = await handleNetworkError(err)
            alert(errorMessage) // =(
        }
        finally {
            this.setState({ loading: false })
        }
    }, 300)

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
            const currentBooks = await BooksAPI.getAll()
            this.setState({ currentBooks })
        }
        catch(err) {
            const errorMessage = await handleNetworkError(err)
            alert(errorMessage) // =(
        }
    }
}

export default withShelves(SearchPage)