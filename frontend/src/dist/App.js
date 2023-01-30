"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Game_1 = require("./components/Game");
var Login_1 = require("./components/Login");
var Logout_1 = require("./components/Logout");
var NoPage_1 = require("./components/NoPage");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Layout_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Home_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "game", element: React.createElement(Game_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "login", element: React.createElement(Login_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "logout", element: React.createElement(Logout_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(NoPage_1["default"], null) })))));
}
exports["default"] = App;
