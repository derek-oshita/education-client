import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 

const routes = () => (
    <Switch >
        {/* HOME */}
        <Route exact path='/' />
    </Switch>
)

export default routes; 