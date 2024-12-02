import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <React.Fragment>
    <header id="header" class="navbar navbar-expand-lg navbar-end navbar-light">
    <div class="container">
      <nav class="js-mega-menu navbar-nav-wrap">
        <Link class="navbar-brand" to={'/'} aria-label="Front">
          <img class="navbar-brand-logo" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/logos/logo.svg" alt="Logo"/>
        </Link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-default">
            <i class="bi-list"></i>
          </span>
          <span class="navbar-toggler-toggled">
            <i class="bi-x"></i>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to={'/'}>Home</Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to={'/AboutUs'}>AboutUs</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link " to={'/ProductList'}>Product</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={'/Blogs'}>Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/ContactUs'}>ContactUs</Link>
            </li>

            <li class="nav-item">
              <button class="btn btn-ghost-secondary btn-sm btn-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarSearch" aria-controls="offcanvasNavbarSearch">
                <i class="bi-search"></i>
              </button>
              <button type="button" class="btn btn-ghost-secondary btn-sm btn-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarEmptyShoppingCart" aria-controls="offcanvasNavbarEmptyShoppingCart">
                <i class="bi-basket"></i>
              </button>
              <button class="btn btn-dark btn-transition mx-3" data-bs-toggle="modal" data-bs-target="#signupModal09">Register</button>
              <button class="btn btn-primary btn-transition" data-bs-toggle="modal" data-bs-target="#signupModal">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    </React.Fragment>
  )
}
