import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    

    return (
        <div className="_checkout">
           <div className="_checkout__left">
               
            {basket?.length === 0 ? (
                <div className="_checkout__emptyCart">
                    <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="Empty Cart"/>
                    <h2>Your Amazon Cart is empty</h2>
                    <p><a href="#">Shop today's deals</a></p>
                        {user? (
                           ""
                        ): (
                            <div className="_checkout__userButtons">
                                <button className="_checkout__btnOne"><a href="/login">Sign in to your account</a></button>
                                <button className="_checkout__btnTwo"><a href="/login">Sign up now</a></button>  
                            </div>
                        )}
                  
                
                </div>
            ) : (
                <div className="_checkout__items">
                     <img 
                    className="_checkout__ad"  
                    src="https://images-na.ssl-images-amazon.com/images/G/01/slsm/slsm_header-mobile_01_750x280_v4.png" 
                    alt="Amazon Ad"
                />

                    <h2 className="_checkout__title">Your Cart  ({basket?.length})</h2>
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
           </div>

            {basket?.length > 0 && (
                <div className="_checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>
    )
}

export default Checkout
