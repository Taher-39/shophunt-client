import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/CartScreen";
import LoginScreen from "./Screen/LoginScreen";
import ResisterScreen from "./Screen/ResisterScreen";
import UserProfileScreen from "./Screen/UserProfileScreen";
import ShippingScreen from "./Screen/ShippingScreen";
import PaymentScreen from "./Screen/PaymentScreen";
import PlaceOrderScreen from "./Screen/PlaceOrderScreen";
import OrderScreen from "./Screen/OrderScreen";
import AllUserScreen from "./Screen/AllUserScreen";
import UserEditScreen from "./Screen/UserEditScreen";
import ProductListScreen from "./Screen/ProductListScreen";
import ProductEditScreen from "./Screen/ProductEditScreen";
import TotalOrderScreen from "./Screen/TotalOrderScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/admin/userlist" component={AllUserScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={TotalOrderScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen} exact
          />
          <Route path="/login" component={LoginScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeOrder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/register" component={ResisterScreen} />
          <Route path="/profile" component={UserProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
