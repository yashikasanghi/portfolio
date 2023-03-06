import React from "react";
import "../index.css";
import Meal from "../components/Cards/meal";
import CartModal from "../components/Layouts/cartModal";
import { useState, useContext } from "react";
import CartContext from "../components/context/cartContext";
export default function Home(props) {

  const [showCart, setShowCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () =>{
    setShowCart(false);
  }

  const showItemCount = (count) => {
    setCartItemCount(count);
  }

  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      
      <header className="header">
      
        <button className="button" onClick={showCartHandler}>
        
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          
          </span>
          
          <span>Your Cart</span>
          <span className="badge">{cartItemCount}</span>
          
        </button>
        
        <ul>
          <li className="inline-block mr-5">Investor Relations</li>
          <li className="inline-block mr-5">Add Restaurant</li>
          <li className="inline-block mr-5"><button onClick={props.loginHandler}>Log in</button></li>
          <li className="inline-block mr-5">Sign Up</li>
        </ul>
      </header>
      {showCart && <CartModal hideCart={hideCartHandler} />}
      <div className="main-image">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        ></img>
      </div>
      <div className="summary">
        <span className="text-5xl">Tomato</span><br/>
        <span>Discover the best food & drinks in Jaipur</span>
      </div>

      <Meal  fetchItemCount = {showItemCount}/>
    </React.Fragment>
  );
}
