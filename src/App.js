
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';
import Booking from './Components/Booking/Booking';
import { getCurrentUser, handleSignOut } from './components/firebaseAuth/HandleLogin';


export const UserContext = createContext();
function App() {
  const Data = useData ();
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
    <UserContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo, signOUtUser}} >
         
    
    <div>
    
    <Header> </Header>
    <firebaseAuth></firebaseAuth>

    <Switch>
          
          <Route path="/home">
          <Home> </Home>
          </Route>
          <Route path="/booking/:id">
          <Booking> </Booking>
          </Route>
          
          <PrivateRoute path=" /search/:id"> 
          <Search> </Search>
          </PrivateRoute>
          <Route path="/login">
            <Login> </Login>
          </Route>
           
          <Route path="/">
            
          </Route>
        </Switch>
      
    </div>
  );
}


export default App;