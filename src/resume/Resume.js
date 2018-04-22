import React from 'react';
import Sidebar from '../navbar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default ()=>
    <div>
        <div>
            <Sidebar/>
        </div>
        <div className="container">
            <div className="row">
                <div id="jobTitles" className="col-sm-4">
                    Software Developer
                </div>
                <div id="dateProgrammer" className="col-sm-6">
                    April 10th 2018-present
                </div>
             </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>did some really cool stuff</p>
                </div>
            </div>
            <div className="row">
                <div id="jobTitles" className="col-sm-4">
                    Junior Software Developer
                </div>
                <div id="dateJuniorProgrammer" className="col-sm-6">
                    April 1st 2017-2018
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>did some really really cool stuff</p>
                </div>
            </div>
        </div>
    </div>