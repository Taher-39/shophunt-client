import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../Redux/Action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCTS_CREATE_RESET } from "../Redux/Constant/ProductsConstants";
import Paginate from "../Components/Paginate";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch(); 
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products, pages, page } = productsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    error: deleteError,
    loading: deleteLoading,
    success: deleteSuccess,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    error: createError,
    loading: createLoading,
    success: createSuccess,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCTS_CREATE_RESET });

    if (!userInfo.admin) {
      history.push("/login");
    }

    if (createSuccess) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    deleteSuccess,
    createSuccess,
    createdProduct,
    pageNumber
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const deleteHandler = (id) => {
    if (window.confirm(`Are you confirm..?`)) {
      dispatch(deleteProduct(id));
    }
  };
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {deleteError && <Message variant="danger">{deleteError}</Message>}
      {deleteLoading && <Loader />}

      {createError && <Message variant="danger">{createError}</Message>}
      {createLoading && <Loader />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((pd, index) => (
              <tr key={index}>
                <td>{pd._id}</td>
                <td>{pd.name}</td>
                <td>$ {pd.price}</td>
                <td>{pd.category}</td>
                <td>{pd.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${pd._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="far fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(pd._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paginate pages={pages} page={page} isAdmin={true} ></Paginate>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
