import React from 'react'
import BookList from '../book-list'

const HomePage = () => {

    const books = [
        {
            id: 1,
            title: '1984',
            author: 'George Orwell' },
        {
            id: 2,
            title: 'Dracula',
            author: 'Bram Stoker'}
    ]

    return (
        <BookList books={books}/>
    )
}

export default HomePage