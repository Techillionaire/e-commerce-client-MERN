import React from 'react'
import "./product.css"
import { AiFillStar } from "react-icons/ai";

const Product = ({title, image, price, rating, }) => {
  const imgLink = "images-na.ssl-images-amazon.com/images/I/51zymoq7UnL._AC_SY400_.jpg";
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <AiFillStar className="rating"/>
              ))}
        </div>
      </div>
        <img src={image} alt="" />
        <button className=''>Add to basket</button>
    </div>
  )
}

export default Product