import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct'
import CurrencyFormat from "react-currency-format";
import './payment.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from '../../api/reducer';
import { useState } from 'react';
import { useStateValue } from '../../app/StateProvider';
import { db } from '../../firebase';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    // const navigate = useNavigate();
    // const stripe = useStripe();
    // const elements = useElements();

    // const [succeeded, setSucceeded] = useState(false);
    // const [processing, setProcessing] = useState("");
    // const [error, setError] = useState(null);
    // const [disabled, setDisabled] = useState(true);
    // const [clientSecret, setClientSecret] = useState(true);


    // const handleSubmit = async (event) => {
    //     // do all the fancy stripe stuff...
    //     event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({ paymentIntent }) => {
    //         // paymentIntent = payment confirmation

    //         db
    //           .collection('users')
    //           .doc(user?.uid)
    //           .collection('orders')
    //           .doc(paymentIntent.id)
    //           .set({
    //               basket: basket,
    //               amount: paymentIntent.amount,
    //               created: paymentIntent.created
    //           })

    //         setSucceeded(true);
    //         setError(null)
    //         setProcessing(false)

    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })

    //         navigate('/orders')
    //     })

    // }

    // const handleChange = event => {
    //     // Listen for changes in the CardElement
    //     // and display any errors as the customer types their card details
    //     setDisabled(event.empty);
    //     setError(event.error ? event.error.message : "");
    // }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>

            <div className='payment__section'> 
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 ChinaTown Avenue,</p>
                    <p>Maryland, Lagos.</p>
                </div>
            </div>
            
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div> 
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}
                </div>
            </div>

            <div className='payment__section'> 
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    
                </div>

            
            </div>

        </div>
    </div>


    // <div className='payment'>
    //         
    //             <h1>
    //                 Checkout (
    //                     <Link to="/checkout">{basket?.length} items</Link>
    //                     )
    //             </h1>


    //             {/* Payment section - delivery address */}
    //             <div className='payment__section'>
    //                 <div className='payment__title'>
    //                     <h3>Delivery Address</h3>
    //                 </div>
    //                 <div className='payment__address'>
    //                     <p>{user?.email}</p>
    //                     <p>123 React Lane</p>
    //                     <p>Maryland, Lagos.</p>
    //                 </div>
    //             </div>

    //             {/* Payment section - Review Items */}
    //             <div className='payment__section'>
    //                 <div className='payment__title'>
    //                     <h3>Review items and delivery</h3>
    //                 </div>
    //                 <div className='payment__items'>
    //                     {basket.map(item => (
    //                         <CheckoutProduct
    //                             id={item.id}
    //                             title={item.title}
    //                             image={item.image}
    //                             price={item.price}
    //                             rating={item.rating}
    //                         />
    //                     ))}
    //                 </div>
    //             </div>
            

    //             {/* Payment section - Payment method */}
    //             <div className='payment__section'>
    //                 <div className="payment__title">
    //                     <h3>Payment Method</h3>
    //                 </div>
    //                 <div className="payment__details">
    //                         {/* Stripe magic will go */}

    //                         <form onSubmit={handleSubmit}>
    //                             <CardElement onChange={handleChange}/>

    //                             <div className='payment__priceContainer'>
    //                                 <CurrencyFormat
    //                                     renderText={(value) => (
    //                                         <h3>Order Total: {value}</h3>
    //                                     )}
    //                                     decimalScale={2}
    //                                     value={getBasketTotal(basket)}
    //                                     displayType={"text"}
    //                                     thousandSeparator={true}
    //                                     prefix={"$"}
    //                                 />
    //                                 <button disabled={processing || disabled || succeeded}>
    //                                     <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
    //                                 </button>
    //                             </div>

    //                               {/* Errors */}
    //                             {error && <div>{error}</div>}
    //                         </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
  )
}

export default Payment