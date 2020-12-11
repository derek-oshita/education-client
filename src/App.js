"use strict";
exports.__esModule = true;
var react_1 = require("react");
var routes_1 = require("./config/routes");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var App = function () {
    return <div className="home-container">
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Switch>
        <routes_1["default"] />
      </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>
  </div>;
};
exports["default"] = App;
