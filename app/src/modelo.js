import { Navbar, Container, Nav, Card, CardBody, Image, CardFooter } from "react-bootstrap"
import "./modelo.css"
import  logo from "./images/logo.png"
import yovoy from "./images/imagenyovoy.png"

function ModeloPred(){
    return(
    <Container>
       <Navbar className="navbar">
      <Card className="imagen">
        <Image src={logo}></Image>
      </Card>
      <p className="title">Sistema de prediccion de cambios</p>
      <Card  className="profile">
      <Image src="https://cdn-icons-png.flaticon.com/512/5987/5987462.png"></Image>
      </Card>
     </Navbar>
     <CardFooter className="footer">
      <Image src={yovoy}></Image>
     </CardFooter>
    </Container>
     
    )
}
export default ModeloPred