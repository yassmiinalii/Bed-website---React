import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux'

import { useGetAllProductTypesQuery } from '../service/productsTypes'
const Mattresses = () => {
    const { data, error, isLoading } = useGetAllProductTypesQuery()
    const productTypes = data?.message?.productTypes;
    console.log(productTypes);

    return (
        <Container className='component-container mattresses-container'>
            <div className="section-title-container">
                <h1> Our Mattresses Lines</h1>
            </div>
            {error ? ( <>Oh no, there was an error</>) :
             isLoading ? ( <>Loading...</>) :
             data ? ( <>data </>) : null}
            {/* <Row>   
                <Col xs={12} md={4} className="productTypes-container d-flex justify-content-center align-items-center">
                    <h2 className='productType-title'>
                        Bliss line
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} >
                    <ProductCard />
                </Col>
            </Row> */}
        </Container>
    );
};

export default Mattresses;