import React, { Component } from 'react';
import BookList from '../components/BookList';
import SearchBox from '../components/SearchBox';
import { Books } from './Books';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
          Books: Books, 
          searchfield: ''
        }
    }

    componentDidMount() {

    
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
      const { Books, searchfield } = this.state;
      const bookFilter = Books.filter(book => {
        return book.title.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !Books.length ? 
      <h1>Loading..</h1> :
    (
      
      <div className='tc'> 
        <h1 className="f2">Your Bookshelf</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <BookList Books={bookFilter}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
    }
}

export default App;