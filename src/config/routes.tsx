import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../components/Home/Home'; 
import IndexPage from '../components/IndexPage/IndexPage'; 

// export default () => (
//     <Switch>
        // <Route exact path="/" component={Home} />
        // <Route exact path="/index" component={IndexPage} />
//     </Switch>
// )

// function routes () {
//     return (
//         <Switch>
//             <Route exact to="/index" component={IndexPage} />
//         </Switch>
//     )
// }

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/index" component={IndexPage} />
    </Switch>
)

export default Routes; 