import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink} from 'react-router-dom'
function NavBar(){
    const activeClass=({ isActive }) => ({
        color: isActive ? '#fff' : '#545e6f',
        background: isActive ? '#7600dc' : '#f0f0f0',
      })

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <span class="navbar-brand">budgetApp</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink className="nav-item nav-link" style={activeClass} to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" style={activeClass} to="/budget">Budget Tracker</NavLink>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;