import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../home/Home'
import Resume from '../resume/Resume'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/resume" exact component={Resume}/>
        </Switch>
    </BrowserRouter>

)