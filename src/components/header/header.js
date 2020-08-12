import React from 'react'
import './header.css'
import Logo from './netflixlogo.png'

let Header =()=>{
    return(
        <div className = 'header-wrapper'>

            <nav className = 'navbar navbar-expand-md'>
                <a href='#' className = 'logo-span navbar-brand'><img src={Logo} alt="netflix-logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className = 'fa fa-bars'></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Characters</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TV Shows</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Latest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My List</a>
                    </li>
                    </ul>

                    <span className = 'auth-span'>
                        <i className = 'fa fa-search'></i>
                        <span className = 'account-type'>Account Type</span>
                        <a href = '#' className = 'nav-item nav-link btn btn-rounded'>Sign In</a>
                    </span>

                </div>
                
            </nav>
        </div>
        
    )
}

export default Header;