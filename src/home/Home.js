import React from 'react'
import Sidebar from '../navbar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../Chrislogo.svg'

export default () =>
    <div>
        <div>
            <Sidebar/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    Welcome to my website
                </div>
                <div className="col-sm-4">
                    <img className="App-logo" alt=""src={logo}/>
                </div>
            </div>
        </div>
    </div>