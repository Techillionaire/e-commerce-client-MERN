import React from 'react'
import "./product.css"
import { AiFillStar } from "react-icons/ai";
import { useStateValue } from '../../app/StateProvider';


const Product = ({id, title, image, price, rating, }) => {


  const [{}, dispatch] = useStateValue();    
  
  const addToBasket = () => {
      //add item to basket
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id,
              title,
              image,
              price,
              rating
          }
      })
  };
  
  
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₦</small>
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
        <button className="product_button" onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product