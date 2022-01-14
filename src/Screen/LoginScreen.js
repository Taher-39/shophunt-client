import React, { useState, useEffect } from "react";
import { Form, Button, Col, FormControl, Row } from "react-bootstrap";
import FromContainer from "../Components/FromContainer";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { login } from "../Redux/Action/userAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
    //dispatch
    dispatch(login(email, password));
  }, [redirect, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FromContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <FormControl
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Button type="button" variant="primary ">
          SignIn
        </Button>
      </Form>

      <Row className="py-5">
        <Col>
          New Customer?{" "}
          <Link
            to={redirect ? `/resister?redirect=${redirect}` : "/resister"}
          />
          Resister
        </Col>
      </Row>
    </FromContainer>
  );
};

export default LoginScreen;
