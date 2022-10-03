import React, { useCallback } from "react";
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NumericFormat } from 'react-number-format';
import imagePlaceHolder from '../assets/images/imagePlaceHolder.jpeg';
import { useSelector, useDispatch } from 'react-redux'
import { Add_TO_Cart } from '../redux/reducers/cartCounterSlice'
const ProductCard = (props) => {
  const { type, name, id,title_english, description_english, beforePrice, afterPrice, product_photos } = props;
  const count = useSelector((state) => state.cartCounter.value)
  const dispatch = useDispatch()

  const handleClickAddToCart = useCallback((e)=>{
    // localStorage.clear();
    dispatch(Add_TO_Cart())
    const cart= JSON.parse(localStorage.getItem("cart"));
      if(cart){      
        localStorage.setItem('cart', JSON.stringify([...cart,id]));
      }
      else
      localStorage.setItem('cart', JSON.stringify([id]));  
      console.log(count); 
  },[id,dispatch,count])
  
//   var colors = ["red","blue","green"];
// localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
// var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back

  return (
    <Card style={{ width: "100%" }} className="card-container">
      <Card.Img
        variant="top"
        src={product_photos[0]?.photo_path ? IMAGES_URL + product_photos[0].photo_path : imagePlaceHolder}
      />
      <Card.Body>
        {type === 'MattressesLines' ? <Card.Title >{name}</Card.Title> : ''}
        <div className="card-body-bottom">
          <div className="card-sub-title d-flex justify-content-between">
            <p className="product-name">{title_english}</p>
            <div className="price-container d-flex gap-2">
              <p className="old-price">
                <NumericFormat
                  value={beforePrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"EGP "} />
              </p>
              <p className="current-price">
                <NumericFormat
                  value={afterPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"EGP "} />
              </p>
            </div>
          </div>
          <Card.Text>
            - {description_english}
          </Card.Text>
          <div className="btn-action-container d-flex justify-content-evenly">
            <Button className="cart-btn" style={{ color: 'white' }} variant="primary" onClick={handleClickAddToCart}>Add To Cart</Button>
            <Button className="details-btn" variant="outline-primary">More Details</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
