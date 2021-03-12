import React from 'react';
import Book from './Book';

const BookList = ({ Books }) => {
  return (
    <div>
      { 
        Books.map((title, i) => {
          return (
            <Book 
              key={i} 
              id={Books[i].id} 
              title={Books[i].title} 
              author={Books[i].author} 
              pub_year={Books[i].pub_year}
            />
          );
       })
      }
    </div>
  ); 
} 

export default BookList;