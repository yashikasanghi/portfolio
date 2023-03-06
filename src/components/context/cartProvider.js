import React from "react";
import CartContext from "./cartContext";
import { useReducer } from "react";

const defaultCartState = {
    item :[],
    totalAmount: 0
};


const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItem = state.item.concat(action.item);        
        return{
            item: updatedItem,
        };
    }
    return defaultCartState;
}

export default function CartProvider (props){
    const [cartState, dispatchedCartState] = useReducer(cartReducer, defaultCartState);
    const addItemtoCart = (item) => {
        dispatchedCartState({
            type: 'ADD',
            item: item
        })
    }
    const removeItemfromcart = (id) => {
        dispatchedCartState({
            type: 'REMOVE',
            id: id
        })
    }
 
    const cartContext = {
        items: cartState.item,
        totalAmount: cartState.amount,
        addItem: addItemtoCart,
        removeItem: removeItemfromcart
    }
       
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}