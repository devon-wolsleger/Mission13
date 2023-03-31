import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Podcast() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">My Podcast</h1>
          <p className="lead mb-4">
            Here is a link to listen to my podcast where I talk about everything
            movies!
          </p>
          <Button
            variant="outline-dark"
            href="https://baconsale.com/"
            target="_blank"
          >
            Listen Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
