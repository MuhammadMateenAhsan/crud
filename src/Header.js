import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/read">Read<span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link active" to="/create">Add New Data</Link>
      <Link class="nav-item nav-link active" to="/update">Update</Link>
      <Link class="nav-item nav-link active" to="/delete">Delete</Link>
     </div>
  </div>
</nav>
    </div>
  )
}

export default Header
