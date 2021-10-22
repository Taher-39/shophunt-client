import React from 'react';
import Rating from '../Components/Rating';
import products from '../products';
import {Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductScreen = ({match}) => {
    const pd = products.find(pd => pd._id === match.params.id);
    return (
        <>
            <Link to='/' className="btn btn-light" >
                Home
            </Link>
            <Row >
                <Col md='6'>
                    <Image className='rounded' src={pd.image} alt={pd.name} fluid />
                </Col>
                <Col md='3' >
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                            <h2>{pd.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={pd.rating} text={`${pd.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            $ {pd.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {pd.description}
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
                <Col md='3' >
                    <Card>
                        <ListGroup variant='flush' >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>$ {pd.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{pd.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className='text-center'>
                                <Button 
                                    className='btn-block rounded' 
                                    type="button" 
                                    disabled={pd.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
