import "bootstrap/dist/css/bootstrap.min.css";
import { Nav,Container, Navbar } from "react-bootstrap";
import { NavLink} from 'react-router-dom'
import UserDropDown from "./userDropDown";
function NavBar(props){
    const userObj=props.usrObj;
    const activeClass=({ isActive }) => ({
        color: isActive ? '#C0C0C0' : '#545e6f',
        background: isActive ? '#7600dc' : '#C0C0C0',
      })

    return(
      <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>BudgetApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" style={activeClass}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/budget" style={activeClass}>
                Budget
              </Nav.Link>
            </Nav>
            <Nav>
            {userObj.loggedIn?<UserDropDown username={userObj.username} logOut={props.logOut}/>
            :<Nav.Link as={NavLink} style={activeClass} to="/register">Register</Nav.Link>
            }
            </Nav>
            

          </Navbar.Collapse>
          
          
        </Container>
    </Navbar>
    )
}
export default NavBar;