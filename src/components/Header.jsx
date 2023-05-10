import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <Link to='/'className="navbar-brand"> 
          <h2>Oura Movies</h2>
        </Link>  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <Link to='/login'  className="nav-link">
                <i className="bi"></i><FaSignInAlt /> Login 
              </Link>  
            </li>
            <li className="nav-item">
              <Link to='/register'  className="nav-link">
                <i className="bi "></i><FaUser /> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Header