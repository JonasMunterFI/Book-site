import React from 'react';

const Book = ({ id, title, author, pub_year }) => {
    
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`/img/${id}.jpg`} alt="Pärmbild" width="230" height="300"/>
        <div>
            <h2 className="bookTitle">{title}</h2>
            <p>Author: {author}</p>
            <p>Published: {pub_year}</p>
        </div>
      </div>
    );
}

export default Book;