
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as 
  Switch,
  Route,
  useLocation,
  
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';
import Booking from './Components/Booking/Booking';
import { getCurrentUser, handleSignOut } from './Components/firebaseAuth/firebaseAuth';


export const UserContext = createContext();
function App() {
  const location = useLocation();

  const [user,setUser]=useState(null);
  const [bookingInfo,setBookingInfo] = useState({});

  useEffect(() => {
    getCurrentUser ().then (res =>{
       setUser(res)
    })
  }, [])

  const signOutUser =() =>{
    handleSignOut ().then (res=>{
      setUser(res)
    })
  }
  return (
   
 
<UserContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo, signOutUser }}>
<div className={`${location.pathname === '/' || location.pathname.includes('booking') ? "home" : ""}`}>
  <Header />
  <Switch>
    <Route exact path="/" Component={Home} />
    <Route path="/booking/:id" Component={Booking} />
    <PrivateRoute path="/search/:id">
      <Search />
    </PrivateRoute>
    <Route path="/login" Component={Login} />
  </Switch>
</div>
</UserContext.Provider>
 );
}

export default App;