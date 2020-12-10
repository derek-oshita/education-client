import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 
import Home from '../components/Home/Home'; 
import { IndexPage } from '../components/IndexPage/IndexPage'; 

const routes = () => (
    <Switch >
        {/* HOME */}
            <Route exact path='/' component={Home}/>
        {/* INDEX PAGE */}
            <Route exact path='/index' component={IndexPage}/>
    </Switch>
)

export default routes; 