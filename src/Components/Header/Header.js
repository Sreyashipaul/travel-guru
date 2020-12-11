import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

import './Header.css'; 
const Header = () => {
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
    <Nav className="mr-auto">
      <Nav.Link href="#News">News</Nav.Link>
      <Nav.Link href="#Destination">Destination</Nav.Link>
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>

    </Nav>
    
  </Navbar>
            
        </div>
    );
};

export default Header;