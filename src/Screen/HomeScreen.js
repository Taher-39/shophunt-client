import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/api/products');

            setProducts(data);
        }
        fetchProducts()
    }, [])
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

export default HomeScreen;
