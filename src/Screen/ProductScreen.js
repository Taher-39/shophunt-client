import React, { useEffect, useState } from "react";
import Rating from "../Components/Rating";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../Redux/Action/productAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(match.params.id));
  }, [match, dispatch]);

  const cartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-light">
        Home
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md="6">
            <Image
              className="rounded"
              src={product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md="3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>$ {product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="3">
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>$ {product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((n) => (
                            <option key={n + 1} value={n + 1}>
                              {n + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item className="text-center">
                  <Button
                    onClick={cartHandler}
                    className="btn-block rounded"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
