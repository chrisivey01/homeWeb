import React from 'react'
import Sidebar from '../navbar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () =>
    <div>
        <div>
            <Sidebar/>
        </div>
        <div className="row">
            <div className="col-sm-4">
                home
            </div>
        </div>
    </div>