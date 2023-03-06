import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { useState } from "react";
import CartProvider from "./components/context/cartProvider";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const showLoginHandler = () => {
    setShowLogin(true);
  }
  const hideLoginHandler = () => {
    setShowLogin(false);
  }
  return (
   <CartProvider>
      {showLogin && <Login closeLoginHandler={hideLoginHandler}/>}
      <Routes>
        <Route  path="/" element={<Home loginHandler={showLoginHandler}/>} />
      </Routes>
    </CartProvider>
    
  );
}

export default App;
