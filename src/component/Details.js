import React from 'react'
import './Details.css'
import DetailsProduct from './DetailsProduct';
import { useStateValue } from './StateProvider'
import {AiOutlineAmazon} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Product from './Product';
function Details() {
    const [{tempBasket}, dispatch ] = useStateValue();

    return (
        <div className="details">
           {tempBasket?.length === 0 ? (
               <div className="empty__details">
                   <AiOutlineAmazon className="details__icons" />
                   <p className="details__p">No Item Selected</p>
                   <Link to="/" className="details__btn">Go Shop</Link>
               </div>
           ): (

               <div>                
                  {tempBasket.map((item) => (
                      <DetailsProduct
                           id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                  ))}

                  <div className="details__recommendation">
                      <h4>Recommended For You</h4>

                      <div className="recommendation">
                        <Product 
                            id={111}
                            title="Ring Indoor Cam, Compact Plug-In HD security camera with two-way talk, Works with Alexa - Black" 
                            rating={4}  
                            price={59.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/41Ggoy6fE2L._SX522_.jpg"
                        />
                        
                        <Product 
                            id={112} 
                            title="All-new Echo Show 10 (3rd Gen | HD smart display with motion and Alexa | Charcoal" 
                            rating={5}  
                            price={249.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/41SFods8jJL._AC_SY400_.jpg"
                        />

                        <Product 
                            id={113}
                            title="Crocs Unisex-Adult Classic Graphic Clog | Water Slip on Shoes" 
                            rating={4.5}  
                            price={50.95} 
                            image="https://images-na.ssl-images-amazon.com/images/I/71YdF-9HzTL._AC_UL1500_.jpg"
                        />
                        
                      </div>
                      <div className="recommendation">
                        <Product 
                            id={118}
                            title="DualSense Wireless Controller" 
                            rating={5}  
                            price={69.98} 
                            image="https://images-na.ssl-images-amazon.com/images/I/41McnBJl0FL._AC_SY400_.jpg"
                        />

                        <Product 
                            id={119}
                            title="DualSense Charging Station" 
                            rating={5}  
                            price={62.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/71ywUrrVHFL._SX522_.jpg"
                        />

                        <Product 
                            id={200}
                            title="Media Remote" 
                            rating={4}  
                            price={42.00} 
                            image="https://images-na.ssl-images-amazon.com/images/I/314f%2BrIu2gL._AC_SY400_.jpg"
                        />
                      </div>
                  </div>
               </div>

               

           )}
        </div>
    )
}

export default Details
