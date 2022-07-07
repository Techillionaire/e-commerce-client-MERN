import React from 'react'
import Product from '../product/Product'

import "./home.css"

const Home = () => {
  return (
    <div className="home">
            <img 
                className="home__image" 
                src="https:images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon prime background"
            />
            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
            
                <Product 
                    id="1232343"
                    title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="Lib Tech TRS HP Snowboard Mens"
                    price={419.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg" 
                />
            </div>
            <div className="home__row">
            <Product 
                    id="1232343"
                    title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="Lib Tech TRS HP Snowboard Mens"
                    price={419.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123234"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                    price={486.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" 
                />
            </div>
        </div>
  )
}

export default Home