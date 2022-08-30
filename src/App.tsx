import { Link,Outlet } from "react-router-dom";
import React from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return(
    <div>
    <Navbar bg="light" expand="lg">
     <Container>
       <Navbar.Brand href="#home">Jamar Bevel Recipe Search</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Item>
           <Nav.Link href="/contact">contact</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/recipeRandom">Recipes</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>

     <Outlet/>
   </div>
  );
}
