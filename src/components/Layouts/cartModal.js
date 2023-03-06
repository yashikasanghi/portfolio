import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";

export default function CartModal (props){
    const cartItems = useContext(CartContext);
    const addedItems = cartItems.items;
    const calculateTotalAmount = (item) =>{
        let totalAmount=0;
            item.map((item) => {
                totalAmount += item.total
            });
        return totalAmount;
    }
    const totalAmount = calculateTotalAmount(addedItems);
    console.log("totalAmount " + totalAmount);
    return(
        <React.Fragment>
         
            <div className="mt-14 absolute">
            
          <div className="bg-white block text-black p-4 rounded-md">
          
            <h1>Your cart</h1>
            <div className="border-t border-gray-400 py-2"></div>
           
            <div className="grid">
            {addedItems.map((item) =>  
            <div className="inline">
                <ul className="float-left"> 
                    <li>{item.name}</li>
                </ul>
                <ul className="float-right ml-52">
                    <li>x {item.qty}</li>
                </ul>
            
                 
            </div>
            )}
            <div className="border-t border-gray-400 py-2"></div>
            <div className="inline">
            
            <h2 className="float-left">Total </h2>
               <h2 className="float-right">{totalAmount}</h2>
               </div>
            </div>
            <div className="mt-6">
            <button className="badge text-white cursor-pointer z-50" onClick={props.hideCart}>Close</button>
            <button className="badge text-white cursor-pointer z-50">Discard</button>  
            <button className="badge text-white cursor-pointer z-50">Proceed</button>  
            </div>  
          </div>
          </div>
          
        </React.Fragment>
    );
}