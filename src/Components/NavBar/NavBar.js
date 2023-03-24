import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link to={"/"}><button>Login</button></Link>
    </nav>
  )
}

export default NavBar