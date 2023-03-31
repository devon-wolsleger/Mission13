import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1 className="display-4">Joel Hilton's Movie Collection</h1>
          <Image
            src="./images/JHH.jpeg"
            alt="Joel Hilton"
            fluid
            className="my-4"
          />
          <p className="lead">
            This website is dedicated to Joel, an amazing man with an even more
            amazing movie collection. Here you'll be able to see his collection
            and listen to his podcast. Enjoy!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
