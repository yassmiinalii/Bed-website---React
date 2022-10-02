import React from 'react';
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";
import PresidentSkelton from './skelton/PresidentSkelton';
import defaultOfferImg from '../assets/images/offer.png';
import { Link } from "react-router-dom";

const defaultText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
const Offers = () => {
    const { isLoading, error, data } = useQuery("offer", () =>
        fetch(API_URL + "/offer").then((res) => res.json())
    );

    const offer = data?.message.offers[0];

    if (isLoading) return <PresidentSkelton />
    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <div className="offer-container component-container">
            <div
              className="offer-img-container d-flex justify-content-center"
              style={{ backgroundImage: `url(${defaultOfferImg})` }}>
                <div className="offer-content d-flex align-items-center flex-column">
                <h1 className='our-offer'>our offers</h1>
                <p className='offer-title'>{offer.english_title}</p>
                <p className='offer-description'>{offer.english_description || defaultText } </p>
                <Link className='btn btn-primary btn-offer' to={offer.discover_now}>Discover Now</Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Offers;