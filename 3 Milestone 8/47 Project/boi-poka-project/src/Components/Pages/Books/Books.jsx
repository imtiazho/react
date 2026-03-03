import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=> {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, []);

    // Another way to load data
    // const booksPromise = fetch('booksData.json').then(res => res.json())
    
    return (
        <div className='grid grid-cols-3 gap-4'>
            {/* <Suspense fallback={<span>Loading</span>}>
                <Book></Book>
            </Suspense> */}
            {
                data.map(book => <Book key={book.id} book={book}></Book>)
            }
        </div>
    );
};

export default Books;