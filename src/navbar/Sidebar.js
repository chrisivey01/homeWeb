import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default () =>

<div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/resume' className="nav-link" >Resume</Link>
            </li>
            {/*<li className="nav-item">*/}
                {/*<Link to='/contact' className="nav-link">Contact</Link>*/}
            {/*</li>*/}
        </ul>
    </nav>
</div>