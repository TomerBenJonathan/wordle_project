"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Board = void 0;
var react_1 = require("react");
function Board(props) {
    var _a = react_1.useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]), cellsValue = _a[0], setCellsValue = _a[1];
    var _b = react_1.useState([
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
    ]), cellsColor = _b[0], setCellsColor = _b[1];
    var _c = react_1.useState([
        ["red", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
        ["black", "black", "black", "black", "black"],
    ]), cellsBorderColor = _c[0], setCellsBorderColor = _c[1];
    var countCharInString = function (char, str) { return str.split(char).length; };
    var handleRestartBoard = function () {
        setCellsValue(function () { return [
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ]; });
        setCellsColor(function () { return [
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
        ]; });
        setCellsBorderColor(function () { return [
            ["red", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
            ["black", "black", "black", "black", "black"],
        ]; });
    };
    var changeTooManyYellowsToGray = function () {
        var secretWord = props.secretWord;
        var currentRow = props.currentRow;
        var arrayCharsInRowTemp = __spreadArrays(props.arrayCharsInRow);
        var cellsColorTemp = __spreadArrays(cellsColor);
        arrayCharsInRowTemp.forEach(function (currentChar, i) {
            if (cellsColor[currentRow][i] === "yellow") {
                var countCharInGuessedRow = countCharInString(currentChar, arrayCharsInRowTemp.join(""));
                var countCharInSecretWord = countCharInString(currentChar, secretWord);
                if (countCharInGuessedRow > countCharInSecretWord) {
                    cellsColorTemp[currentRow][i] = "gray";
                }
                arrayCharsInRowTemp[i] = "$";
            }
        });
        setCellsColor(cellsColorTemp);
    };
    var paintCells = function () {
        var secretWord = props.secretWord;
        var cellsColorTemp = __spreadArrays(cellsColor);
        props.arrayCharsInRow.forEach(function (currentChar, i) {
            if (currentChar === secretWord.charAt(i)) {
                cellsColorTemp[props.currentRow][i] = "green";
            }
            else if (secretWord.includes(currentChar)) {
                cellsColorTemp[props.currentRow][i] = "yellow";
            }
            else {
                cellsColorTemp[props.currentRow][i] = "gray";
            }
        });
        changeTooManyYellowsToGray();
    };
    react_1.useEffect(function () {
        if (props.restartGame) {
            handleRestartBoard();
            props.handleContinueGame();
            return;
        }
        if (props.currentRow > 4) {
            return;
        }
        var cellsValueTemp = __spreadArrays(cellsValue);
        var cellsBorderColorTemp = __spreadArrays(cellsBorderColor);
        if (props.arrayCharsInRow.length === 0) {
            cellsBorderColorTemp[props.currentRow][0] = "red";
        }
        props.arrayCharsInRow.forEach(function (currentChar, i) {
            cellsValueTemp[props.currentRow][i] = currentChar;
            var cellsBorderColorTemp = __spreadArrays(cellsBorderColor);
            cellsBorderColorTemp[props.currentRow][i] = "#301ad1";
            if (i < 4) {
                var cellsBorderColorTemp_1 = __spreadArrays(cellsBorderColor);
                cellsBorderColorTemp_1[props.currentRow][i + 1] = "red";
            }
            else if (i === 4 && props.currentRow <= 4) {
                paintCells();
            }
            if (i === 4 && props.currentRow < 4) {
                var cellsBorderColorTemp_2 = __spreadArrays(cellsBorderColor);
                cellsBorderColorTemp_2[props.currentRow + 1][0] = "red";
            }
            setCellsValue(cellsValueTemp);
            setCellsBorderColor(cellsBorderColorTemp);
        });
    }, [props]);
    return (React.createElement("div", { className: "game-board" },
        React.createElement("div", { className: "game-board-inner" },
            React.createElement("div", { className: "game-row" },
                React.createElement("div", { className: "game-box line-1 col-2", style: {
                        color: cellsColor[0][0],
                        border: "2px solid " + cellsBorderColor[0][0]
                    } }, cellsValue[0][0]),
                React.createElement("div", { className: "game-box line-1 col-2", style: {
                        color: cellsColor[0][1],
                        border: "2px solid " + cellsBorderColor[0][1]
                    } }, cellsValue[0][1]),
                React.createElement("div", { className: "game-box line-1 col-2", style: {
                        color: cellsColor[0][2],
                        border: "2px solid " + cellsBorderColor[0][2]
                    } }, cellsValue[0][2]),
                React.createElement("div", { className: "game-box line-1 col-2", style: {
                        color: cellsColor[0][3],
                        border: "2px solid " + cellsBorderColor[0][3]
                    } }, cellsValue[0][3]),
                React.createElement("div", { className: "game-box line-1 col-2", style: {
                        color: cellsColor[0][4],
                        border: "2px solid " + cellsBorderColor[0][4]
                    } }, cellsValue[0][4])),
            React.createElement("div", { className: "game-row" },
                React.createElement("div", { className: "game-box line-2 col-2", style: {
                        color: cellsColor[1][0],
                        border: "2px solid " + cellsBorderColor[1][0]
                    } }, cellsValue[1][0]),
                React.createElement("div", { className: "game-box line-2 col-2", style: {
                        color: cellsColor[1][1],
                        border: "2px solid " + cellsBorderColor[1][1]
                    } }, cellsValue[1][1]),
                React.createElement("div", { className: "game-box line-2 col-2", style: {
                        color: cellsColor[1][2],
                        border: "2px solid " + cellsBorderColor[1][2]
                    } }, cellsValue[1][2]),
                React.createElement("div", { className: "game-box line-2 col-2", style: {
                        color: cellsColor[1][3],
                        border: "2px solid " + cellsBorderColor[1][3]
                    } }, cellsValue[1][3]),
                React.createElement("div", { className: "game-box line-2 col-2", style: {
                        color: cellsColor[1][4],
                        border: "2px solid " + cellsBorderColor[1][4]
                    } }, cellsValue[1][4])),
            React.createElement("div", { className: "game-row" },
                React.createElement("div", { className: "game-box line-3 col-2", style: {
                        color: cellsColor[2][0],
                        border: "2px solid " + cellsBorderColor[2][0]
                    } }, cellsValue[2][0]),
                React.createElement("div", { className: "game-box line-3 col-2", style: {
                        color: cellsColor[2][1],
                        border: "2px solid " + cellsBorderColor[2][1]
                    } }, cellsValue[2][1]),
                React.createElement("div", { className: "game-box line-3 col-2", style: {
                        color: cellsColor[2][2],
                        border: "2px solid " + cellsBorderColor[2][2]
                    } }, cellsValue[2][2]),
                React.createElement("div", { className: "game-box line-3 col-2", style: {
                        color: cellsColor[2][3],
                        border: "2px solid " + cellsBorderColor[2][3]
                    } }, cellsValue[2][3]),
                React.createElement("div", { className: "game-box line-3 col-2", style: {
                        color: cellsColor[2][4],
                        border: "2px solid " + cellsBorderColor[2][4]
                    } }, cellsValue[2][4])),
            React.createElement("div", { className: "game-row" },
                React.createElement("div", { className: "game-box line-4 col-2", style: {
                        color: cellsColor[3][0],
                        border: "2px solid " + cellsBorderColor[3][0]
                    } }, cellsValue[3][0]),
                React.createElement("div", { className: "game-box line-4 col-2", style: {
                        color: cellsColor[3][1],
                        border: "2px solid " + cellsBorderColor[3][1]
                    } }, cellsValue[3][1]),
                React.createElement("div", { className: "game-box line-4 col-2", style: {
                        color: cellsColor[3][2],
                        border: "2px solid " + cellsBorderColor[3][2]
                    } }, cellsValue[3][2]),
                React.createElement("div", { className: "game-box line-4 col-2", style: {
                        color: cellsColor[3][3],
                        border: "2px solid " + cellsBorderColor[3][3]
                    } }, cellsValue[3][3]),
                React.createElement("div", { className: "game-box line-4 col-2", style: {
                        color: cellsColor[3][4],
                        border: "2px solid " + cellsBorderColor[3][4]
                    } }, cellsValue[3][4])),
            React.createElement("div", { className: "game-row" },
                React.createElement("div", { className: "game-box line-5 col-2", style: {
                        color: cellsColor[4][0],
                        border: "2px solid " + cellsBorderColor[4][0]
                    } }, cellsValue[4][0]),
                React.createElement("div", { className: "game-box line-5 col-2", style: {
                        color: cellsColor[4][1],
                        border: "2px solid " + cellsBorderColor[4][1]
                    } }, cellsValue[4][1]),
                React.createElement("div", { className: "game-box line-5 col-2", style: {
                        color: cellsColor[4][2],
                        border: "2px solid " + cellsBorderColor[4][2]
                    } }, cellsValue[4][2]),
                React.createElement("div", { className: "game-box line-5 col-2", style: {
                        color: cellsColor[4][3],
                        border: "2px solid " + cellsBorderColor[4][3]
                    } }, cellsValue[4][3]),
                React.createElement("div", { className: "game-box line-5 col-2", style: {
                        color: cellsColor[4][4],
                        border: "2px solid " + cellsBorderColor[4][4]
                    } }, cellsValue[4][4])))));
}
exports.Board = Board;
