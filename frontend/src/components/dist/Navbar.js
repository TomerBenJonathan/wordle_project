"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./navbar.css");
var react_2 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var axios_1 = require("axios");
var react_router_dom_2 = require("react-router-dom");
var SERVER_BASE_URL = "http://localhost:3333";
function Navbar() {
    var _this = this;
    var _a = react_2.useState(false), showModalLogin = _a[0], setShowModalLogin = _a[1];
    var _b = react_2.useState(false), showModalInfo = _b[0], setShowModalInfo = _b[1];
    var handleCloseModalLogin = function () { return setShowModalLogin(function () { return false; }); };
    var handleShowModalLogin = function () { return setShowModalLogin(function () { return true; }); };
    var handleCloseModalInfo = function () { return setShowModalInfo(function () { return false; }); };
    var handleShowModalInfo = function () { return setShowModalInfo(function () { return true; }); };
    var _c = react_2.useState('Guest'), username = _c[0], setUsername = _c[1];
    var _d = react_2.useState(''), password = _d[0], setPassword = _d[1];
    var navigate = react_router_dom_2.useNavigate();
    react_2.useEffect(function () {
        var user = localStorage.getItem('username');
        if (!user)
            throw new Error('not find user in localstorage');
        setUsername(user);
    }, []);
    var loginInServer = function (username, password) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, status, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post(SERVER_BASE_URL + "/login", { username: username, password: password })];
                case 1:
                    _a = _b.sent(), data = _a.data, status = _a.status;
                    if (status === 200) {
                        console.log("response from server: ", data);
                        return [2 /*return*/, data];
                    }
                    else {
                        console.log("Error: Failed to login in server");
                        alert("Error: Failed to login in server. server status=" + status);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    console.log("Error: Failed to login in server.");
                    alert("Error: Failed to login in server. " + e_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, "failed"];
            }
        });
    }); };
    var handleLogin = function () { return __awaiter(_this, void 0, void 0, function () {
        var serverResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loginInServer(username, password)];
                case 1:
                    serverResponse = _a.sent();
                    if (serverResponse === "ok") {
                        handleCloseModalLogin();
                        console.log("navigate username=", username);
                        localStorage.setItem('username', username);
                        navigate('/game');
                    }
                    else {
                        alert("Invalid user");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLogut = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            localStorage.setItem('username', "Guest");
            setUsername("Guest");
            navigate('/game');
            return [2 /*return*/];
        });
    }); };
    var getInputElement = function (e) {
        var target = e.target;
        if (!target)
            throw new Error('target must be not null');
        return target;
    };
    var handleChangeUsername = function (e) {
        setUsername(getInputElement(e).value);
    };
    var handleChangePassword = function (e) {
        setPassword(getInputElement(e).value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        handleLogin();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", null,
            react_1["default"].createElement("ul", { className: "ulNavbar" },
                react_1["default"].createElement("li", { className: "liNavbar" },
                    react_1["default"].createElement(react_router_dom_1.Link, { className: "aNavbar", style: { color: "cyan" }, to: "/" }, "Wordle Game")),
                (!username || username === "Guest") &&
                    react_1["default"].createElement("li", { className: "liNavbar" },
                        react_1["default"].createElement(react_router_dom_1.Link, { className: "aNavbar", to: "#", onClick: function () { return handleShowModalLogin(); } }, "Login")),
                (username !== "Guest") &&
                    react_1["default"].createElement("li", { className: "liNavbar" },
                        react_1["default"].createElement(react_router_dom_1.Link, { className: "aNavbar", to: "#", onClick: function () { return handleLogut(); } }, "Logout")),
                react_1["default"].createElement("li", { className: "liNavbar" },
                    react_1["default"].createElement(react_router_dom_1.Link, { className: "aNavbar", to: "#", onClick: function () { return handleShowModalInfo(); } }, "Info")))),
        react_1["default"].createElement(react_bootstrap_1.Modal, { show: showModalLogin, onHide: handleCloseModalLogin },
            react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "Wordle Game - Login")),
            react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
                react_1["default"].createElement("div", { className: "Auth-form-container" },
                    react_1["default"].createElement("form", { className: "Auth-form", onSubmit: function (e) { handleSubmit(e); } },
                        react_1["default"].createElement("div", { className: "Auth-form-content" },
                            react_1["default"].createElement("div", { className: "form-group mt-3" },
                                react_1["default"].createElement("label", null, "Username"),
                                react_1["default"].createElement("input", { type: "text", className: "form-control mt-1", placeholder: "Enter username", value: username, required: true, onChange: function (e) { handleChangeUsername(e); } })),
                            react_1["default"].createElement("div", { className: "form-group mt-3" },
                                react_1["default"].createElement("label", null, "Password"),
                                react_1["default"].createElement("input", { type: "password", className: "form-control mt-1", placeholder: "Enter password", value: password, required: true, onChange: function (e) { handleChangePassword(e); } })),
                            react_1["default"].createElement("div", { className: "d-grid gap-2 mt-4" },
                                react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit"))))))),
        react_1["default"].createElement(react_bootstrap_1.Modal, { show: showModalInfo, onHide: handleCloseModalInfo },
            react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                react_1["default"].createElement(react_bootstrap_1.Modal.Title, null, "Wordle Game - info")),
            react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null, "Guess the secret word in 5 tries"),
                    react_1["default"].createElement("li", null, "Each guess must be a valid 5 english letters word"),
                    react_1["default"].createElement("li", null, "Board and keyboard colors will change to help you")),
                react_1["default"].createElement("img", { className: "info_image", src: require('../img/wordle_info.png'), alt: "wordle explained" })),
            react_1["default"].createElement(react_bootstrap_1.Modal.Footer, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { variant: "primary", onClick: handleCloseModalInfo }, "OK")))));
}
exports["default"] = Navbar;
