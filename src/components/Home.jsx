import React from "react";
import './Home.css';
import iPhone from '../assets/iPhone-img.png';
import cart from '../assets/cart-img.jpg';

export const Home = () => {
    return(
        <React.Fragment>
            <div className="add-to-cart">
                <img 
                    src={cart}
                    alt="cart"
                />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img
                        src={iPhone}
                        alt="iPhone"
                    />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </React.Fragment>
    )
}
