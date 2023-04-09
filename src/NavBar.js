import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signOut} from 'firebase/auth'
import useUser from './hooks/useUser'

const NavBar = () => {
  const {user} = useUser()
  const navigate = useNavigate()
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 items-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles">Articles</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
  <div className='nav-right'>
    {user 
    ? <button onClick={() => {
        signOut(getAuth())
    }}>Log Out</button>
    : <button onClick={()=>{
        navigate('/login')
    }}>Log In</button>}
    </div>
</nav>
    )
}

export default NavBar