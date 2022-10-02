import React from 'react';
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { Col, Container, Row, Image } from 'react-bootstrap'
import PresidentSkelton from './skelton/PresidentSkelton';

const VicePresidentMsg = () => {

    const { isLoading, error, data } = useQuery("vicePresident", () =>
        fetch(API_URL + "/vicePresident").then((res) => res.json())
    );
    
    const vicePresidentMessage = data?.message.vice_president[0];
    const message = vicePresidentMessage?.english_description?.split("\r\n",2);


    if (isLoading) return <PresidentSkelton imgDirection='flex-row-reverse'  />
    if (error) return "An error has occurred: " + error.message;
    return (
        <Container className='president-container component-container'>
            <Row className='gap-0 align-items-center flex-row-reverse'>
            <Col md={4} lg={4} xs={12}>
                    <div className="president-image-container">
                        <Image fluid src={IMAGES_URL + vicePresidentMessage.image} className="president-image " alt="President" />
                    </div>
                </Col>
                <Col md={8} lg={8} xs={12} >
                    <div className="president-msg-description-container vice">
                        <div className="president-msg-description">
                            <div className="president-title">Vice President</div>
                            {message.map((msg) => (
                                <p key={msg} className='msg'>
                                    - {msg}
                                </p>
                            ))}
                        </div>
                    </div>
                </Col>
               
            </Row>
        </Container>
    );
};

export default VicePresidentMsg;