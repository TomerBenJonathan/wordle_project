"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./Navbar");
var Layout = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(react_router_dom_1.Outlet, null)));
};
exports["default"] = Layout;
