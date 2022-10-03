import React, { useCallback, useState, useEffect } from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import ProductCard from './ProductCard';
import usePagination from "./helpers/Pagination";
import { Pagination } from "@mui/material";
import { useGetAllProductTypesQuery } from '../service/productsTypes'
import ProductCardSkeltonGroup from './skelton/cardGroubSkelton';
import AOS from 'aos';

const Mattresses = () => {

    const { data, error, isLoading } = useGetAllProductTypesQuery()
    const productTypes = data?.message?.productTypes;
    const [activeKey, setActiveKey] = useState(1);
    const [selectedTypeProducts, setSelectedTypeProducts] = useState([]);
    const selectedCategory = data?.message?.productTypes[activeKey - 1];
    const [page, setPage] = useState(1);
    const PER_PAGE = 3;
    const count = Math.ceil(selectedTypeProducts?.length / PER_PAGE);


    const _DATA = usePagination(selectedTypeProducts, PER_PAGE);;

    useEffect(() => {
        AOS.init();
      }, []);

    useEffect(()=>{
        setSelectedTypeProducts(data?.message?.productTypes[activeKey - 1].products)
    },[data,activeKey])
    
    const handleSelectProductType = useCallback((eventKey) => {
        console.log(eventKey);
        setActiveKey(eventKey);
        setSelectedTypeProducts(data?.message?.productTypes[activeKey - 1].products)
        _DATA.jump(1);
    }, [activeKey,data,_DATA])
    
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
        console.log(p);
    };


    return (
        <Container className='component-container mattresses-container'>
            <div className="section-title-container">
                <h1 data-aos="fade-in"> Our Mattresses Lines</h1>
            </div>
            {error ? (<>Oh no, there was an error {error.msg}</>) :
                isLoading ? (<ProductCardSkeltonGroup/>) :
                    data ? (
                        <>
                            <Row >
                                <Nav variant="pills" activeKey={activeKey} onSelect={handleSelectProductType}>
                                    {productTypes.map((type) => (
                                        <Col sx={2}  className="mb-1" key={type.id}>
                                            <Nav.Item data-aos="fade-in">
                                                <Nav.Link eventKey={type.id}>
                                                    {type.header_title_english}
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                    ))}
                                </Nav>
                            </Row>
                            {
                               selectedTypeProducts?  (<Row className='mt-5'>
                               {_DATA?.currentData().map((product) => (
                                   <Col data-aos="fade-in" xs={12} md={4}  key={product.id}  className='mb-5'  >
                                       <ProductCard
                                           type="MattressesLines"
                                           name={selectedCategory.header_title_english}
                                           {...product} />
                                   </Col>
                               ))}
                               <Pagination
                                   boundaryCount={0}
                                   siblingCount={0}
                                   count={count}
                                   size="large"
                                   page={page}
                                   variant="outlined"
                                   color="primary"
                                   onChange={handleChange}
                                   sx={{ mt: 4 }}
                               />
                           </Row> ) : <> <ProductCardSkeltonGroup/></>
                            }
                           

                        </>
                    ) : null}
        </Container>
    );
};

export default Mattresses;