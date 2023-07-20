import {Link,useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Inotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/">Action</Link></li>
            <li><Link className="dropdown-item" href="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      { !localStorage.getItem("token") ?
      <form className="d-flex">
 
       <Link to="/login"  className="btn btn-outline-success" type="submit">Login</Link>
                <Link to="/signup"  className="btn btn-outline-success" type="submit">Signup</Link>
 </form> :         <button className="btn btn-outline-success" onClick={logout} type="submit">Logout</button>}
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar;