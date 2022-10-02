import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
