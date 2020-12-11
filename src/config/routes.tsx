import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../components/Home/Home'; 
import IndexPage from '../components/IndexPage/IndexPage'; 

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={IndexPage} />
    </Switch>
)

export default Routes; 