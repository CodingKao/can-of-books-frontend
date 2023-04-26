import { Component } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import kaopic from './Image/kaopic.jpeg'

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/200px280" />
              <Card.Body>
                <Card.Title>Yaz Ahmed</Card.Title>
                <Card.Text>
                Yaz is a software developer, skilled in designing and building applications to solve problems and meet user needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={kaopic} />
              <Card.Body>
                <Card.Title>Kao Saelor</Card.Title>
                <Card.Text>
                Kao is a software developer, experienced in creating efficient, reliable, and user-friendly software applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/200px280" />
              <Card.Body>
                <Card.Title>Kenya Womack</Card.Title>
                <Card.Text>
                Kenya is a software developer, passionate about coding and creating innovative solutions to complex problems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
