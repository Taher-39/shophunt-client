import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Redux/Action/productAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h2>Top Ratted Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm="12" md="6" lg="4" xl="3">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
