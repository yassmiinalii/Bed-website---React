import React from 'react';
import Skeleton from "react-loading-skeleton";
import {Col, Container, Row, Stack} from 'react-bootstrap'
const PresidentSkelton = (props) => {
    const {imgDirection, textDirection} = props;
    return (
        <Container className='component-container'> 
        <Row className={`align-items-center ${imgDirection}  `}>
            <Col xs={12} md={4} className=" justify-content-center align-items-center">
          <Skeleton width={'95%'} height={510} borderRadius={50} highlightColor="#FDFDFD" baseColor="#F8F9FA"/>
            </Col>
          <Col xs={12} md={8} >
            <div className={`d-flex flex-column ${textDirection}`}>
          <Skeleton width={"90%"} height={70} borderRadius={10} highlightColor="#FDFDFD" baseColor="#F8F9FA"/>
          <Skeleton width={'80%'} height={50} borderRadius={10} highlightColor="#FDFDFD" baseColor="#F8F9FA"/>
          <Skeleton width={'90%'} height={70} borderRadius={10} highlightColor="#FDFDFD" baseColor="#F8F9FA"/>
          <Skeleton width={'80%'} height={50} borderRadius={10} highlightColor="#FDFDFD" baseColor="#F8F9FA"/>
            </div>
          </Col>
        </Row>
        </Container>
    );
};

export default PresidentSkelton;