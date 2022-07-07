import React from 'react'
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/checkout`} element={<Checkout />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App