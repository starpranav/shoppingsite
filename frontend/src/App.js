import React from 'react';
import data from './data';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import {  useDispatch,useSelector } from 'react-redux';
import { signout } from './actions/userActions';

function App() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  
}
  return (
      <BrowserRouter>
    <div class="grid-container">
            <header class="header">
                
             <div class="brand">
                <button onClick={openMenu}>
                    &#9776; 
                 </button>
                 
                 <Link to="/">Star Shopping</Link>
           
             </div>
             <div class="header-links">
                 <a href="cart.html">cart</a>
                 {
                     userInfo ? (
                        <div className="dropdown">
                          <Link to="#">
                            {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                          </Link>
                          <ul className="dropdown-content">
                          <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
                </div>
                     ):(
                          
                     <Link to="/signin">Sign In</Link>
                     )
                 }


                 
                
             </div>
            </header>
            <aside class="sidebar">
                <h3>shopping catagories</h3>
                <button class="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html">pants</a>
                    </li>
                    <li>
                        <a href="index.html">shirts</a>
                    </li>
                </ul>


            </aside>
            
            <main class="main">
                <div class="content">
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
                <Route path="/cart/:id?" component={CartScreen}/>   
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />

                    
                </div>
                
                   
                    
            </main>
            <footer class="footer">
                All rights reserved
            </footer>
        </div>
        </BrowserRouter>
        
 );
}

export default App;
