import React from "react";
import { useRef, useState, useContext, useReducer, useEffect } from "react";
import CartContext from "../context/cartContext";

export default function Meal(props) {
  const dummyMeals = [
    {
        id: 1,
        img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        name: "Food - 1",
        price: "500",
        qty: 0
    },
    {
        id: 2,
        img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        name: "Food - 2",
        price: "500",
        qty: 0
    },
    {
        id: 3,
        img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        name: "Food - 3",
        price: "500",
        qty: 0
    }
];
  const cartCtx = useContext(CartContext);
  const itemCountRef = useRef();
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const countReducer = (state, action) => {
    console.log(state, action);
   
    if (action.type === "ADD") {
      const newState = state.map((meal) =>
        meal.id === action.id ? { ...meal, qty: meal.qty + 1 } : meal,
      );
      setItemIsAdded(true);
      setItemCount(itemCount+1);
      return newState;
    } else if (action.type === "SUB") {
      const newState = state.map((meal) =>
       ( meal.id === action.id ) && (meal.qty > 0) ? { ...meal, qty: meal.qty - 1 } : meal
      );
      if(itemCount === 1){
        setItemIsAdded(false);
        setItemCount(0)
      }
      else{
        setItemCount(itemCount-1);
      }     
      return newState;
    }
    return state;
  };

  props.fetchItemCount(itemCount);
  
  const addItemToCart = () => {
    let addedMeals=[];
    mealState.map((meal) => 
      (meal.qty > 0) ? addedMeals.push({id: meal.id, name:meal.name, qty: meal.qty, price: meal.price, total: (meal.qty*meal.price)}) : ''
    );
   cartCtx.addItem(addedMeals);
  }
  const [mealState, dispatchMealState] = useReducer(countReducer, dummyMeals);

  return (
    <React.Fragment>
    {mealState.map((meal) => 
    <div key={meal.id} className="inline-block my-1 px-1 w-full md:w-1/2 lg:my-24 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={meal.img}
          />
         <div className="bg-white">
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <span className="no-underline hover:underline text-black">
                {meal.name}
              </span>
            </h1>
            <p className="text-grey-darker text-sm">{meal.price}</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <div className="flex items-center">
              <button className="ml-2 text-sm h-6 w-6 border-2 text-black  border-red-600 rounded-full text-center" onClick={() => dispatchMealState({type:'SUB', id: meal.id})}>-</button>
              <p className="ml-2 text-sm h-9 w-9 border-2 text-white  bg-red-600 rounded-lg text-center py-1.5" id={meal.id} ref={itemCountRef}>{meal.qty}</p>
              <button className="ml-2 text-sm h-6 w-6 border-2 text-black  border-red-600 rounded-full text-center"  onClick={() => dispatchMealState({type:'ADD', id: meal.id})}>+</button>
            </div>
            </footer>
          </div>
        </article>
      </div>
)}
{ itemIsAdded && <div className="bg-red-600 w-full h-12 ">
<p className="mx-4 mt-4 float-left text-white">{itemCount} ITEM</p>
<button className="m-1 text-sm h-9 w-9 border-2 text-white w-fit p-4 rounded-lg text-center py-1.5 float-right" onClick={addItemToCart}>Add to Cart</button>
</div> 
}

    </React.Fragment>
  );
}
