import React from "react";
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  const { isLoading, error, data } = useQuery("sliders", () =>
    fetch(API_URL + "/sliders").then((res) => res.json())
  );
  const sliders = data?.message.sliders;

  if (isLoading) return <Skeleton height={"540px"} highlightColor="#ffff" baseColor="#F8F9FA" />;
  if (error) return "An error has occurred: " + error.message;

  return (

    <Carousel className="banner">
      {sliders.map((slider) => (
        <Carousel.Item key={slider.english_title}>
          <div className="img-container">
            <div
              className="banner-img"
              style={{ backgroundImage: `url(${IMAGES_URL + slider.image})` }}>
            </div>
              <Carousel.Caption  >
                <h3 className='h1 slide-title'>{slider.english_title}</h3>
                <p className='slide-description'>{slider.english_description}</p>
                <Link className='btn btn-primary btn-banner' to={slider.discover_now}>Discover Now</Link>
              </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
