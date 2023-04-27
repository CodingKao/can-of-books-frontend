import React from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import Image from './Image/bookImg.jpg';
import BookModal from './BookFormModal';
import UpdateBook from './UpdateBookModal';

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

    // TODO: CONSTRUCT A BOOK OBJ BASED ON THE FORM INPUT VALUES
    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    }
    console.log(bookObj);

    // Create add book & send to backend
    const postBook = async (bookObj) => {
      try {
        // TODO: build my url for axios -> http://localhost:3001/books
        let url = `${process.env.REACT_APP_SERVER}/books`

        // TODO: pass the url and the cat data into axios on a POST and store that return in a variable
        let postBook = await axios.post(url, bookObj);

        // TODO: Update state with that newly created book
        this.setState({ books: [...this.state.books, postBook.data] })
        this.closeModal();

        console.log('Book saved', postBook.data)

      } catch (error) {
        console.log(error.message);
      }
    };
    postBook(bookObj);
  };

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let urlUpdate = await axios.put(url, bookToUpdate);
      let updatedBookArr = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? urlUpdate.data : existingBook
      })
      this.setState({ books: updatedBookArr });
    } catch (error) {
      console.log(error.message);
    }
  };

  // *** HANDLER TO DELETE BOOK ****
  deleteBook = async (bookID) => {
    try {
      // TODO: Build out the url for axios -> http://localhost:3001/cats/64481c6eaaa56c3a62ca80e5
      let url = `${process.env.REACT_APP_SERVER}/books/${bookID}`;
      console.log('url in delete; url');

      // TODO: pass that URL into axios on a DELETE
      await axios.delete(url);

      // TODO: update state -> Filter out the book with the matching ID That is going to be deleted. We are going to look at each book in state and if the id of that book does not match the one to be deleted, it gets put into the array called updatedBooks
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

  openForm = () => {
    this.setState({ showForm: true })
  }
  closeForm = () => {
    this.setState({ showForm: false })
  };
  openFormWithSelectedBook = (book) => {
    this.setState({ showForm: true, selectedBook: book });
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
                      <span role="img" aria-label="heart"> </span>
                      <strong><em>Highly Recommended</em></strong>
                    </>
                  )}</h5>
                  <p className='book-description'>{book.description}</p>
                  <div className='button-div'>
                    <Button className='add-button' onClick={this.openModal}>Add a Book!</Button>
                    <Button className='update-button' onClick={() => this.openFormWithSelectedBook(book)}>Update a Book!</Button>
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

<UpdateBook
          show={this.state.showForm}
          onHide={this.closeForm}
          updateBook={this.updateBook}
          onBookUpdate={this.closeForm}
          book={this.state.selectedBook}
        />

      </>
    );
  }
}

export default BestBooks;
