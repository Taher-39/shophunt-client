import React, { useEffect } from "react";
import Rating from "../Components/Rating";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../Action/productAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const ProductScreen = ({ match }) => {
  // const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // const fetchProduct = async () => {
    //     const { data } = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);

    //     setProduct(data);
    // }
    // fetchProduct()
    dispatch(detailsProduct(match.params.id));
  }, [match, dispatch]);

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
                <ListGroup.Item className="text-center">
                  <Button
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
