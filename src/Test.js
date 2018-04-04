import React,{Component} from 'react'
import Sidebar from './navbar/Sidebar'

import {test} from './Utils'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Test extends Component{
    render(){
        return(
        <div>
            <Sidebar/>
                <div className="container">

                     test
                </div>
        </div>

        )
    }
}