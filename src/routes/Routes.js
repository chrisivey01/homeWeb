import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../home/Home'
import Resume from '../resume/Resume'
import GymCalc from '../gymcalc/GymCalc'
import Patient from '../patientapp/Patient'
import Projects from '../Projects/Projects'


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/resume" exact component={Resume}/>
            <Route path="/patient" exact component={Patient}/>
            <Route path="/gymcalc" exact component={GymCalc}/>
            <Route path="/projects" exact component={Projects}/>
        </Switch>
    </BrowserRouter>

)