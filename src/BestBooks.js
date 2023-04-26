import React from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import Image from './Image/bookImg.jpg'
import BookModal from './BookForm';
// import './App.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      // TODO: build the url for axios to hit my server - my books endpoint
      // http://localhost:3001/books
      let url = `${process.env.REACT_APP_SERVER}/books`;

      // TODO: pass the url into an axios.get() and then store that return in a variable
      let urlData = await axios.get(url);

      // TODO: take that return and set state of books
      this.setState({
        books: urlData.data
      });

    } catch (error) {
      console.log(error.message);
    }
  };

  // prevent default
  handleBookSubmit = (event) => {
    event.preventDefault();

    // construct a book obj based on the form input values
    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    }
    console.log(bookObj);

    // Create add book 
    const postBook = async (bookObj) => {
      try {
        let url = `${process.env.REACT_APP_SERVER}/books`
        let postBook = await axios.post(url, bookObj);
        this.setState({ books: [...this.state.books, postBook.data] })
        this.closeModal();

        console.log('Book saved', postBook.data)

      } catch (error) {
        console.log(error.message);
      }
    };
    postBook(bookObj);
  };


  // create delete book
  deleteBook = async (bookID) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookID}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== bookID)
      this.setState({ books: updatedBooks });

    } catch (error) {
      console.log(error.message)
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  // create the modal  
  openModal = () => {
    this.setState({ showModal: true })
  };

  closeModal = () => {
    this.setState({ showModal: false })
  };


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      // console.log('App State >>> ', this.state);
      <>
        <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src={Image}
                  alt={book.title}
                  style={{ maxHeight: '500px', objectFit: 'contain', marginTop: '2em', marginBottom: '2em' }}
                />
                <Carousel.Caption>
                  <h3 className='book-title'>{book.title}</h3>
                  <h5> {book.status && (
                    <>
                      <span role="img" aria-label="heart"> ❤️ </span>
                      <strong><em>Highly Recommended</em></strong>
                    </>
                  )}</h5>
                  <p className='book-description'>{book.description}</p>
                  <div className='button-div'>
                    <Button className='add-button' onClick={this.openModal}>Add a Book!</Button>
                    <Button className='delete-button' onClick={() => this.deleteBook(book._id)}>Delete a Book!</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <BookModal
          show={this.state.showModal}
          onHide={this.closeModal}
          onSubmit={this.handleBookSubmit}
          onBookAdd={this.closeModal}
        />

      </>
    );
  }
}

export default BestBooks;
