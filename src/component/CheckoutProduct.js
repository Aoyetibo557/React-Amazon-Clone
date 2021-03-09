import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        // remove items/ item from basket
        console.log(id, title, rating, image, price);
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

    }

    return (
        <div className="_chekouProduct">
            <img className="_checkoutProduct__image" src={image} alt=""/>

            <div className="_checkoutProduct__info">
                <p className="_checkoutProduct__title">{title}</p>
                <p className="_checkourProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="_checkoutPrioduct__rating">
                    <Rating value={rating} disabled />
                </div>

                <button onClick={removeFromBasket} className="_checkoutProduct__btn">Delete</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
