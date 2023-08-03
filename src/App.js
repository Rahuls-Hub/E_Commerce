import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Signup from "./Components/Signup";
import { AddProducts } from './Components/AddProducts'
import Cart from "./Components/Cart";

function App() {
  return (
     <>
         <Router>
             <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/signup" element={<Signup/>} />
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/add-products" element={<AddProducts/>} />
                  <Route element={<NotFound/>}/>
                  <Route exact path="/Cart" element={<Cart/>}/>

             </Routes>
         </Router>
     </>
  );
}

export default App;
