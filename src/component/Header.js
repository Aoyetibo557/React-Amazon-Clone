import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login =() => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <nav className="_header">
            <Link to="/">
                <img className="_header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Image Logo" />
            </Link>

            <div className="_header__address _header__link">
                <span >Hello</span>
                <span className="_header__optionLineTwo">
                    <LocationOnIcon />
                    Select Your Address
                </span>
            </div>

           <div className="_header__search">
               <select className="_header__select">
                   <option>All Departments</option>
                   <option>Deals</option>
                   <option>Alexa Skills</option>
                   <option>Amazon Devices</option>
                   <option>Audible Books & Originals</option>
                   <option>Baby</option>
                   <option>Books</option>
                   <option>Women</option>
                   <option>Men</option>
                   <option>Girls</option>
                   <option>Boys</option>
               </select>
                <input className="_header__searchInput" type="text" placeholder="Enter Keywords" />
                <SearchIcon className="_header__searchIcon"/>
           </div>

           <div className="_header__nav">
            <Link className="_header__link" to={!user && "/login"}>
                <div onClick={login} className="_header__option">
                    <span className="_header__optionLineOne">Hello {user?.email} </span>
                    <span className="_header__optionLineTwo">{user? 'Sign Out' : 'Sign in'}</span>
                </div>
            </Link>

             <Link className="_header__link" to="/">
                <div className="_header__option">
                    <span className="_header__optionLineOne">Returns </span>
                    <span className="_header__optionLineTwo">& Orders</span>
                </div>
            </Link>

             <Link className="_header__link" to="/">
                <div className="_header__option">
                    <span className="_header__optionLineOne">Your </span>
                    <span className="_header__optionLineTwo">Prime</span>
                </div>
            </Link>

            <Link className="_header__link" to="/checkout" >
                <div className="_header__cart">
                    <ShoppingBasketIcon />
                    <span className="_header__optionLineTwo _header__cartCount" >
                        {basket?.length}
                    </span>
                </div>
            </Link>
           
           </div>
        </nav>
    )
}

export default Header
