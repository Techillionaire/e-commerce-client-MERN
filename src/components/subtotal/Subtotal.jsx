import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../app/StateProvider';
import { getBasketTotal } from '../../api/reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const payment = (e) => {
    e.preventDefault();

    navigate('/payment')
  }

  return (
      <div className="subtotal">
          {/* Price */}
          <CurrencyFormat
              renderText={(value) => (
                  <div>
                      <p>
                          Subtotal ({basket.length} items): <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                          <input type="checkbox" /> This order contains a gift
                      </small>
                  </div>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeperator={true}
              prefix={"$"}
          />
          <button onClick={payment}>Proceed to Checkout</button>
      </div>
  )
}

export default Subtotal