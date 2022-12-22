
import { Link } from 'react-router-dom';
import{Nav,NavDropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



function NavbarLogin()
{
  const navigate = useNavigate();
  const handleLogout = (event) => {
    localStorage.removeItem("login");
    navigate("/Home");
  }
 
    return(<>
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
       <Link className="navbar-brand" to='/Dashboard'>Login Dashboard</Link> 
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/Employee'>Employee</Link> 
        </li>
        <li className="nav-item">
       <a className="nav-link" href="" onClick={handleLogout}>LogOut</a>
       </li>
        
      </ul>
    </div>
  </nav>
  <nav>

  </nav>
  
  </>)
}

export default NavbarLogin;