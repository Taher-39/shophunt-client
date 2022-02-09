import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { totalOrderAction } from "../Redux/Action/orderAction";
import { useSelector, useDispatch } from "react-redux";

const TotalOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const totalOrder = useSelector((state) => state.totalOrder);
  const { error, loading, orders } = totalOrder;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.admin) {
      dispatch(totalOrderAction());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);
  return (
    <div>
      <h1>Orders</h1>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="primary" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    </div>
  );
};

export default TotalOrderScreen;
