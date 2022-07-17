import React, { useEffect } from 'react'
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useStateValue } from './app/StateProvider';
import { auth } from './firebase';

const App = () => {
  const [{}, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);
  

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/checkout`} element={<Checkout />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App