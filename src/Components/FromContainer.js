import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

const FromContainer = ({ Children }) => {
  return <Container>
      <Row className="justify-contain-md-center">
          <Col xs={12} md={6}>{Children}</Col>
      </Row>
  </Container>;
};

export default FromContainer;
