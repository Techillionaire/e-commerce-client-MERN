import React from 'react'
import "./product.css"

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>book</p>
        <p className="product__price">
          <small>$</small>
          <strong>500</strong>
        </p>
        <div className="product__rating">
          4
        </div>
      </div>
        <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        <button >Add to basket</button>
    </div>
  )
}

export default Product