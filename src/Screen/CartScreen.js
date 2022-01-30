import React, { useEffect } from "react";
import { addToCart, removeToCart } from "../Redux/Action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  Form,
  Card,
} from "react-bootstrap";

const CartScreen = ({ history, match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? location.search.split("=")[1] : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeToCart(id));
  };

  const handleCheckOut = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    <p>${item.price}</p>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((n) => (
                        <option key={n + 1} value={n + 1}>
                          {n + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (acc, curItem) => acc + Number(curItem.qty),
                  0
                )}
                ) Items
              </h2>
              $
              {cartItems
                .reduce((acc, curItem) => acc + curItem.qty * curItem.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={handleCheckOut}
              >
                PROCEED TO CHECKOUT
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
