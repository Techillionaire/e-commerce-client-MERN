import "./header.css";
import React from 'react'
import { BsSearch, BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "../../app/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

  return (
    <nav className="header">
        <Link to={`/`}>
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </Link>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <i className="header__searchIcon">
                <BsSearch />
            </i>
        </div>

        <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to={`/checkout`} className="header__link">
                    <div className="header__optionBasket"></div>
                        {/* Shopping Basket Icon */}
                        <i>
                            <BsFillBasket2Fill />
                        </i>
                        {/* Number of items in the basket */}
                        <span className="header__basketCount">{basket?.length}</span>
                </Link>
            </div>
    </nav>
  )
}

export default Header