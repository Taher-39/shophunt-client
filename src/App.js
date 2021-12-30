import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container  } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component = {HomeScreen} exact />
          <Route path='/product/:id' component = {ProductScreen} />
        </ Container >
      </main>
      <Footer />
    </Router>
  );
}

export default App;
