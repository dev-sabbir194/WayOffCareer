import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>We're sorry, but the page you requested could not be found.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
