import { Navbar, Container, Nav, Card, Image,  NavDropdown, CardFooter } from "react-bootstrap"
import "./modelo.css"
import  logo from "./images/logo.png"
import yovoy from "./images/imagenyovoy.png"




 export const ModeloPred = ()=> {
  return (
    
      <Container className="">
               <Navbar expand="lg" className="fixed-title">
        <Navbar.Brand  className ="navbarBrand" href="#home" ><Image className="logo" src={logo}></Image>YOVOY FIXED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Navbar> 
     </Container>


  );
};


