import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink} from 'react-router-dom'
import UserDropDown from "./userDropDown";
function NavBar(props){
    const userObj=props.usrObj;
    const activeClass=({ isActive }) => ({
        color: isActive ? '#fff' : '#545e6f',
        background: isActive ? '#7600dc' : '#f0f0f0',
      })

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <span className="navbar-brand btn btn-dark active">budgetApp</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" style={activeClass} to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" style={activeClass} to="/budget">Budget Tracker</NavLink>
          </div>
  
        </div>
        <ul className="navbar-nav d-flex flex-row me-1">
          {userObj.loggedIn?<UserDropDown username={userObj.username} logOut={props.logOut}/>
          :<NavLink className="nav-item nav-link me-3 me-lg-0" style={activeClass} to="/register">Register</NavLink>
          }
        </ul>
      </nav>
    )
}
export default NavBar;