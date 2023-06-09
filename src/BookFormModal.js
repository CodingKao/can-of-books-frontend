import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

class BookFormModal extends React.Component {

    // Prevent click from redirect to URL instead run on form submission
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(event);
    };

    render() {
        return (
            <>
                {/* pop up modal for form submission */}
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type='text' placeholder='Enter Book Title' required></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type='textarea' rows={3} required></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='status'>
                                <Form.Check type='checkbox' label='Highly Recommended'></Form.Check>
                            </Form.Group>
                            <Button variant='primary' type='submit'>Add Book</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default BookFormModal;