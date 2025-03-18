import { Navbar, Container, Nav, Card, CardBody } from "react-bootstrap"
import "./modelo.css"
import  logo from "./images/logo.png"

function ModeloPred(){
    return(
      <Container className="modelo">
          <Navbar>
        <Container className="logo">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"

            />{' '}
             <Nav.Link href="#home">Home</Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Card>
        <CardBody variant ="Light">

        </CardBody>
        
      </Card>
      </Container>
    )
}
export default ModeloPred