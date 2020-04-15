import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
export default function NavigationBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
                <div className="container">
    <a href="/" className="navbar-tryout font-weight-bold text-uppercase" ><h4>{props.navbarName}</h4></a>
                </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <Link to="/" className="nav-link"> Home</Link></li>
                        <li className="nav-item"> <Link to="/Contact/Add" className="nav-link"> AddContact</Link></li>
                        <li className="nav-item"> <Link to="/About" className="nav-link"> About</Link></li>
                     
                    </ul>
                    
                </div>

            </nav>
            
        </div>
    ) 
}
