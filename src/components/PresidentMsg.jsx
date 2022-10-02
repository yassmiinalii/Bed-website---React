import React from 'react';
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { Col, Container, Row, Image } from 'react-bootstrap'
import PresidentSkelton from './skelton/PresidentSkelton';

const PresidentMsg = () => {
    const { isLoading, error, data } = useQuery("presidentMessage", () =>
        fetch(API_URL + "/presidentMessage").then((res) => res.json())
    );
    
    const presidentMessage = data?.message.president_message[0];
    const message = presidentMessage?.english_description?.split(".");


    if (isLoading) return <PresidentSkelton />
    if (error) return "An error has occurred: " + error.message;
    return (
        <Container fluid className='president-container component-container '>
            <h1 className="section-title-container">
                Message From The President & Vice President
            </h1>
            <Row className='gap-0 align-items-center'>
                <Col md={4} lg={4} xs={12}>
                    <div className="president-image-container">
                        <Image fluid src={IMAGES_URL + presidentMessage.image} className="president-image " alt="President" />
                    </div>
                </Col>
                <Col md={8} lg={8} xs={12} >
                    <div className="president-msg-description-container">
                        <div className="president-msg-description">
                            <div className="president-title">President</div>
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

export default PresidentMsg;