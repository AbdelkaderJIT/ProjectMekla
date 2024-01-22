import React, { useState, useEffect } from "react";
import TheNav from "./components/Header/TheNav";
import Sections from "./components/Sections/Sections";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import TheFooter from "./components/Footer/TheFooter";
import Swal from "sweetalert2";
import TheCommonNav from "./components/Header/TheCommonNav";
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/userAuth/actions';
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import { Routes,Route } from 'react-router-dom';
import ManageFood from "./components/Food/ManageFood";

const App = () => {


  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }

  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.auth.isAuth)






  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
    
  };
  //END

  //EVent to occur on Order
  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });
  };

  //END

  //Rendering the cart and all the sections
  return (

<div className="App">


<TheCommonNav />
   
    {isAuth &&
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
        }
      <Routes>
  <Route path="/" element={<Home/>} />
  
</Routes>
  
<ManageFood />

    </div>

  );
  //END
};

export default App;


{/*   <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
     
    </CartProvider> */}