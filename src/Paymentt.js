import React from 'react'
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom" 
import './Payment.css'

function Paymentt() {
    const [{basket,user}] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Bhagwan Ganj Mandi</p>
                        <p>Modinagar UP 201204</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                     <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                             <CheckoutProduct
                              id = {item.id}
                              title = {item.title}
                              image =   {item.image}
                              price = {item.price}
                              rating = {item.rating}   
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stgripe fb j,hsfbsjkcnajks */}
                    </div>   

                    

                </div>

        </div>
    </div>
  )
}

export default Paymentt;