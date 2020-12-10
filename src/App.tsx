import React from 'react';
import Home from './components/Home/Home'; 
import IndexPage from './components/IndexPage/IndexPage'; 
import Routes from './config/routes'
import { BrowserRouter, Switch } from 'react-router-dom'; 
import './App.css'; 

const App: React.FC = () => {
  return <div className="home-container container">
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
