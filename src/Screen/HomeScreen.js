import React from 'react';
import products from '../products';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';

const HomeScreen = () => {
    return (
        <>
        <h2>Top Ratted Products</h2>
        <Row>
            {
                products.map((product) => (
                    <Col key={product._id} sm='12' md='6' lg='4' xl='3'>
                        <ProductCard product={product} />
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default HomeScreen
