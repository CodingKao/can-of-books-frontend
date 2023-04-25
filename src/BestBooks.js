import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Image from './Image/bookImg.jpg'
// import './App.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      // TODO: build the url for axios to hit my server - my books endpoint
      // http://localhost:3001/books
        let url = `${process.env.REACT_APP_SERVER}/books`
  
      // TODO: pass the url into an axios.get() and then store that return in a variable
      let urlData = await axios.get(url);

      // TODO: take that return and set state of books
      this.setState({
        books: urlData.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }
  
  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      // console.log('App State >>> ', this.state);
      <>
<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
{this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src={Image}
                  alt={book.title}
                  style={{ maxHeight: '800px', objectFit: 'contain', marginTop: '2em', marginBottom: '2em' }}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
