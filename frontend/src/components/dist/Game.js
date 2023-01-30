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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("../App.css");
var Board_1 = require("./Board");
var react_1 = require("react");
var Keyboard_1 = require("./Keyboard");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var SERVER_BASE_URL = "http://localhost:3333";
function Game() {
    var _this = this;
    var MAX_CHARS_IN_ROW = 5;
    var MAX_ROWS = 5;
    var _a = react_1.useState([]), arrayCharsInRow = _a[0], setArrayCharsInRow = _a[1];
    var _b = react_1.useState(0), currentRow = _b[0], setCurrentRow = _b[1];
    var _c = react_1.useState(""), secretWord = _c[0], setSecretWord = _c[1];
    var wasSecretWordFetchedRef = react_1.useRef(false);
    var _d = react_1.useState(0), currentSecretWordIndex = _d[0], setCurrentSecretWordIndex = _d[1];
    var _e = react_1.useState(false), restartGame = _e[0], setRestartGame = _e[1];
    var _f = react_1.useState(""), modalEndGameMessage = _f[0], setModalEndGameMessage = _f[1];
    var _g = react_1.useState(false), showModalEndGame = _g[0], setShowModalEndGame = _g[1];
    var _h = react_1.useState(false), showModalInfo = _h[0], setShowModalInfo = _h[1];
    var handleCloseModalEndGame = function () { return setShowModalEndGame(function () { return false; }); };
    var handleShowModalEndGame = function () { return setShowModalEndGame(function () { return true; }); };
    var handleCloseModalInfo = function () { return setShowModalInfo(function () { return false; }); };
    var handleShowModalInfo = function () { return setShowModalInfo(function () { return true; }); };
    var location = react_router_dom_1.useLocation();
    var handleRestartGame = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    handleCloseModalEndGame();
                    return [4 /*yield*/, getSecretWordFromServer()];
                case 1:
                    _a.sent();
                    setRestartGame(true);
                    setCurrentRow(0);
                    setArrayCharsInRow([]);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleContinueGame = function () { setRestartGame(function () { return false; }); };
    var getSecretWordFromServer = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, status, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get(SERVER_BASE_URL + "/secretWord")];
                case 1:
                    _a = _b.sent(), data = _a.data, status = _a.status;
                    if (status == 200) {
                    }
                    else {
                        alert("Error: Failed to get secret word from server. server status=" + status);
                    }
                    setSecretWord(data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    alert("Error: Failed to get secret word from server. " + e_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (wasSecretWordFetchedRef.current)
            return;
        wasSecretWordFetchedRef.current = true;
        getSecretWordFromServer();
    }, []);
    function onClickedChar(clickedChar) {
        clickedChar = clickedChar.toUpperCase();
        var validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (!validChars.includes(clickedChar)) {
            return;
        }
        if ((arrayCharsInRow.join("") + clickedChar) === secretWord) {
            setTimeout(function () {
                setModalEndGameMessage(function () { return "Yeh, you win!"; });
                setShowModalEndGame(function () { return true; });
            }, 500);
        }
        else {
            if (currentRow == MAX_ROWS - 1 && arrayCharsInRow.length === MAX_CHARS_IN_ROW - 1) {
                setTimeout(function () {
                    setModalEndGameMessage(function () { return "mmm... you lost"; });
                    setShowModalEndGame(function () { return true; });
                }, 500);
            }
        }
        if (arrayCharsInRow.length < MAX_CHARS_IN_ROW) {
            setArrayCharsInRow(__spreadArrays(arrayCharsInRow, [clickedChar]));
            return;
        }
        setArrayCharsInRow([clickedChar]);
        if (currentRow < MAX_ROWS) {
            setCurrentRow(currentRow + 1);
        }
    }
    var username = localStorage.getItem('username');
    return (React.createElement("div", { className: "App", tabIndex: 0, onKeyDown: function (event) { return onClickedChar(event.key.toLocaleUpperCase()); } },
        React.createElement("h3", null,
            "Playing as ",
            username ? username : "Guest"),
        React.createElement(react_bootstrap_1.Modal, { show: showModalEndGame, onHide: handleCloseModalEndGame },
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, null, "End Game")),
            React.createElement(react_bootstrap_1.Modal.Body, null, modalEndGameMessage),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: handleRestartGame }, "Restart Game"))),
        React.createElement(react_bootstrap_1.Modal, { show: showModalInfo, onHide: handleCloseModalInfo },
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, null, "Wordle Game - info")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement("ul", null,
                    React.createElement("li", null, "Guess the secret word in 5 tries"),
                    React.createElement("li", null, "Each guess must be a valid 5 english letters word"),
                    React.createElement("li", null, "Board and keyboard colors will change to help you")),
                React.createElement("img", { className: "info_image", src: require('../img/wordle_info.png'), alt: "wordle explained" })),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: handleCloseModalInfo }, "OK"))),
        React.createElement("div", { className: "main-div" },
            React.createElement(Board_1.Board, { currentRow: currentRow, arrayCharsInRow: arrayCharsInRow, secretWord: secretWord, restartGame: restartGame, handleContinueGame: handleContinueGame }),
            React.createElement(Keyboard_1.Keyboard, { onClickedChar: onClickedChar, arrayCharsInRow: arrayCharsInRow, secretWord: secretWord, restartGame: restartGame, handleContinueGame: handleContinueGame }))));
}
exports["default"] = Game;
