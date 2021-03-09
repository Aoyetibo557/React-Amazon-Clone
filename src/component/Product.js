import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'
import { useStateValue } from './StateProvider';

function Product(props) {
    const {id, price, title, rating, image } = props;
    const[{}, dispatch] = useStateValue();

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

    const goToDetails = () => {
        dispatch({
            type: 'SEE_CURR_ITEM',
            item: {
                id: id,
                title: title,
                image:image,
                price: price,
                rating: rating
            }
        })

    }

    return (
        <div  className="_product">
            <div onClick={goToDetails} className="_product__info">
                <Link to="/details">
                    <p className="_product__title">{title}</p>
                </Link>
                <p className="_product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="_product__rating">
                    <Rating name="_productRating" value={rating} disabled />
                </div>
            </div>
           
            <img src={image} alt="productImage" />
            <button className="_product__btn" onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
