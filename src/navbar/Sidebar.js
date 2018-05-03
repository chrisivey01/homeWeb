import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';



export default () =>


<div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="col-sm-4">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/resume' className="nav-link" >Resume</Link>
                </li>
                {/*<li className="nav-item">*/}
                    {/*<Link to='/patient' className="nav-link">Patient App</Link>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                    {/*<Link to='/gymcalc' className="nav-link">Gym Calculator</Link>*/}
                {/*</li>*/}
                <li className="nav-item">
                    <Link to='/projects' className="nav-link">Projects</Link>
                </li>
            </ul>
        </div>
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
            {/*<div id="github" className="fa fa-github fa-w-16 fa-3x pull-right" href={"https://github.com/chrisivey01"} ></div>*/}
            <a href={"https://github.com/chrisivey01"}><div className={"fa fa-github fa-w-16 fa-3x pull-right" }> </div> </a>
        </div>
    </nav>
</div>