import "./header.css";
import React from 'react'
import { BsSearch, BsFillBasket2Fill } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="header">
        <a href="/" >
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </a>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <i className="header__searchIcon">
                <BsSearch />
            </i>
        </div>

        <div className="header__nav">
                {/* 1st link */}
                <a href="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello LEE</span>
                        <span className="header__optionLineTwo">Logout</span>
                    </div>
                </a>
                {/* 2nd link */}
                <a href="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </a>
                {/* 3rd link */}
                <a href="/" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </a>
                {/* 4th link */}
                <a href="/" className="header__link">
                    <div className="header__optionBasket"></div>
                        {/* Shopping Basket Icon */}
                        <i>
                            <BsFillBasket2Fill />
                        </i>
                        {/* Number of items in the basket */}
                        <span className="header__basketCount">6</span>
                </a>
            </div>
    </nav>
  )
}

export default Header