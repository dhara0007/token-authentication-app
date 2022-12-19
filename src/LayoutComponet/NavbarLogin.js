
import { Link } from 'react-router-dom';

function NavbarLogin()
{
    return(<><nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
       <Link className="navbar-brand" to='/Dashboard'>Login Dashboard</Link> 
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/Employee'>Employee</Link> 
        </li>
       
       
      </ul>
    </div>
  </nav></>)
}

export default NavbarLogin;