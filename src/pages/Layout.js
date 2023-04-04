import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Layout = () => {

    return (
        <>
     <Navbar bg="dark" variant="dark">
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./Contact">Our Staff</Nav.Link>
            <Nav.Link href="./Blogs">Movies</Nav.Link>
            <Nav.Link href="./Theme">Theme</Nav.Link>
            <Nav.Link href="./ApiPage">ApiPage</Nav.Link>
            
           
          </Nav>
        </Container>
      </Navbar>

    
        <Outlet/>
        </>
    )
};

export default Layout;