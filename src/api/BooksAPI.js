import { sortBy } from 'lodash'

const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const normalizeBookData = book => ({
    ...book,
    imageLinks: book.imageLinks || {},
    authors: book.authors || [],
    shelf: book.shelf || 'none'
})

const normalizeBooksData = books => {
    return books instanceof Array
        ? books.map(normalizeBookData)
        : []
}

const sortByTitle = books => {
    return sortBy(books, ['title'])
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)
    .then(normalizeBookData)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .then(normalizeBooksData)
    .then(sortByTitle)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  })
  .then(res => res.json())

export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(data => data.books)
    .then(normalizeBooksData)
    .then(sortByTitle)
