import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NumericFormat } from 'react-number-format';
const ProductCard = (props) => {
  const type = props;
  return (
    <Card style={{ width: "100%" }} className="card-container">
      <Card.Img
        variant="top"
        src="https://demos-iconcreations.com/schlafmiestrback/assets/productImages/Bliss-Fortune120.jpg"
      />
      <Card.Body>
        {/* { type==='MattressesLines'? <Card.Title >Card Title</Card.Title> : ''}
           */}
        <Card.Title>Card Title</Card.Title>
        <div className="card-body-bottom">
          <div className="card-sub-title d-flex justify-content-between">
            <p className="product-name">product name</p>
            <div className="price-container d-flex gap-2">
            <p className="old-price"> 
             <NumericFormat
              value={123}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"EGP "}/>
            </p>
            <p className="current-price">  
             <NumericFormat
              value={123}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"EGP "}/>
            </p>
            </div>    
          </div>
        <Card.Text> 
          - Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="btn-action-container d-flex justify-content-evenly">
        <Button className="cart-btn" style={{color: 'white'}} variant="primary">Add To Cart</Button>
        <Button className="details-btn" variant="outline-primary">More Details</Button>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
