import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import './Header.css'; 
import { UserContext} from '../../App';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const {user,signOutUser} = useContext(UserContext)
    return (
        <div>
           <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
    
          <img
            src="https://i.ibb.co/FHBKmhh/travel-logo.png"
            width="150"
            height="80"
            className="d-inline-block align-top"
            alt="travel-guru logo"
          />
     </Navbar.Brand>
   
    <Form inline>
      <FormControl type="text" 
         style={{width: "600px"}}
       placeholder="Search" className="mr-sm-2" />
    </Form>
    <Nav  className={`ml-auto ${location.pathname === '/' || location.pathname.includes("/Booking/") ? 'Header-nav2' : 'Header-nav'}`}>
      <Nav.Link href="#News">News</Nav.Link>
      <Nav.Link href="#Destination">Destination</Nav.Link>
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      {user ? (
              <>
                <Nav.Link className="px-4 font-weight-bold" >{user.name.split(' ')[0]}</Nav.Link>
                <Nav.Link className="px-4" onClick={signOutUser} >Logout</Nav.Link>
              </>
            ) : (
                <Nav.Link as={Link} className="px-4" to="/login">Login</Nav.Link>
              )}
    </Nav>
    
  </Navbar>
            
        </div>
    );
};

export default Header;