import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Redux/Action/productAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { Link } from "react-router-dom";
import Paginate from "../Components/Paginate";
import TopProductsCarousel from "../Components/TopProductsCarousel";
import Meta from "../Components/Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products, pages, page } = productsList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <TopProductsCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Home
        </Link>
      )}
      <h2>Top Ratted Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.length === 0 && (
              <h6>
                Product Not Match <Link to="/">BACK</Link>
              </h6>
            )}
            {products.map((product) => (
              <Col key={product._id} sm="12" md="6" lg="4" xl="3">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          ></Paginate>
        </>
      )}
    </>
  );
};

export default HomeScreen;
