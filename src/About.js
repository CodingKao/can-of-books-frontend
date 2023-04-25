import { Component } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Yaz Ahmed</Card.Title>
                <Card.Text>
                Yaz is a software developer, skilled in designing and building applications to solve problems and meet user needs.
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                  LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kao Saelor</Card.Title>
                <Card.Text>
                Kao is a software developer, experienced in creating efficient, reliable, and user-friendly software applications.
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                  LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kenya Womack</Card.Title>
                <Card.Text>
                Kenya is a software developer, passionate about coding and creating innovative solutions to complex problems.
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                  LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
