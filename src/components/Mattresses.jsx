import React, { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux'
import Nav from 'react-bootstrap/Nav';

import { useGetAllProductTypesQuery } from '../service/productsTypes'
const Mattresses = () => {
    const { data, error, isLoading } = useGetAllProductTypesQuery()
    const productTypes = data?.message?.productTypes;
    // console.log(productTypes);

    const [activeKey, setActiveKey] = useState(1);

    const selectedTypeProducts = data?.message?.productTypes[activeKey - 1];
    console.log(selectedTypeProducts);

    const handleSelectProductType = useCallback((eventKey) => {
        console.log(eventKey);
        setActiveKey(eventKey);
    }, [])



    return (
        <Container className='component-container mattresses-container'>
            <div className="section-title-container">
                <h1> Our Mattresses Lines</h1>
            </div>
            {error ? (<>Oh no, there was an error {error.msg}</>) :
                isLoading ? (<>Loading...</>) :
                    data ? (
                        <>
                            <Row >
                                <Nav variant="pills" activeKey={activeKey} onSelect={handleSelectProductType}>
                                    {productTypes.map((type) => (
                                        <Col key={type.id}>
                                            <Nav.Item>
                                                <Nav.Link eventKey={type.id}>
                                                    {type.header_title_english}
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                    ))}
                                </Nav>
                            </Row>
                            <Row  className='mt-5'>
                                {selectedTypeProducts.products.map((product) => (
                                    <Col xs={12} md={4}  >
                                        <ProductCard key={product.id}
                                            type="MattressesLines"
                                            name={selectedTypeProducts.header_title_english}
                                            {...product} />
                                    </Col>
                                ))}
                            </Row>
                        </>
                    ) : null}
        </Container>
    );
};

export default Mattresses;