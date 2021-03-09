import React from 'react'
import './DetailsProduct.css'
import Rating from '@material-ui/lab/Rating'
import { useStateValue } from './StateProvider'

function DetailsProduct({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image:image,
                price: price,
                rating: rating
            }
        })
    }


    return (
        <div className="_detailProduct">
            <div className="_detailProduct__top">
                <div>
                <img className="_detailProduct__image" src={image} alt="" />
                </div>
                <div className="_detailProduct__info">
                    <p className="_detailProduct__title" >{title}</p>
                    <p className="_detailProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <Rating value={rating} disabled/>

                    <button onClick={addToBasket} className="_detailProduct__btn">Add to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default DetailsProduct
