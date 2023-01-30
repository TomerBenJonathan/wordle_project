"use strict";
exports.__esModule = true;
exports.Keyboard = void 0;
var react_1 = require("react");
function Keyboard(props) {
    react_1.useEffect(function () {
        if (props.restartGame) {
            handleRestartKeyboard();
            props.handleContinueGame();
            return;
        }
        if (props.arrayCharsInRow.length === 5) {
            paintChars();
        }
    }, [props]);
    var getListKeyboardButtons = function () {
        return Array.from(document.getElementsByClassName("keyboard-key"));
    };
    var handleRestartKeyboard = function () {
        var keyboardButtons = getListKeyboardButtons();
        keyboardButtons.forEach(function (keyboardButton) {
            keyboardButton.style.color = "black";
            keyboardButton.style.backgroundColor = "white";
        });
    };
    var getKeyboardButton = function (character) {
        var keyboardButtons = getListKeyboardButtons();
        var keyboardButton = keyboardButtons.find(function (keyboardButton) { return keyboardButton.value === character; });
        if (!keyboardButton)
            throw new Error('cant use keyboardButton of undefined');
        return keyboardButton;
    };
    var paintChars = function () {
        var secretWord = props.secretWord;
        props.arrayCharsInRow.forEach(function (currentChar, i) {
            var keyboardButton = getKeyboardButton(currentChar);
            if (currentChar === secretWord.charAt(i)) {
                keyboardButton.style.color = "white";
                keyboardButton.style.backgroundColor = "green";
            }
            else if (secretWord.includes(currentChar)) {
                if (keyboardButton.style.backgroundColor !== "green") {
                    keyboardButton.style.color = "black";
                    keyboardButton.style.backgroundColor = "yellow";
                }
            }
            else {
                keyboardButton.style.color = "white";
                keyboardButton.style.backgroundColor = "gray";
            }
        });
    };
    return (React.createElement("div", null,
        React.createElement("div", null, "Keyboard"),
        React.createElement("div", { className: "game-keyboard" },
            React.createElement("div", { className: "game-keyboard-inner" },
                React.createElement("div", { className: "first-row" },
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("Q"); }, value: "Q" }, "q"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("W"); }, value: "W" }, "w"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("E"); }, value: "E" }, "e"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("R"); }, value: "R" }, "r"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("T"); }, value: "T" }, "t"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("Y"); }, value: "Y" }, "y"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("U"); }, value: "U" }, "u"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("I"); }, value: "I" }, "i"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("O"); }, value: "O" }, "o"),
                    React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("P"); }, value: "P" }, "p")),
                React.createElement("div", { className: "second-row" }),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("A"); }, value: "A" }, "a"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("S"); }, value: "S" }, "s"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("D"); }, value: "D" }, "d"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("F"); }, value: "F" }, "f"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("G"); }, value: "G" }, "g"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("H"); }, value: "H" }, "h"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("J"); }, value: "J" }, "j"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("K"); }, value: "K" }, "k"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("L"); }, value: "L" }, "l")),
            React.createElement("div", { className: "third-row" },
                React.createElement("button", { className: "keyboard-key", value: "Enter" }, "Enter"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("Z"); }, value: "Z" }, "z"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("X"); }, value: "X" }, "x"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("C"); }, value: "C" }, "c"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("V"); }, value: "V" }, "v"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("B"); }, value: "B" }, "b"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("N"); }, value: "N" }, "n"),
                React.createElement("button", { className: "keyboard-key", onClick: function () { return props.onClickedChar("M"); }, value: "M" }, "m"),
                React.createElement("button", { className: "keyboard-key", value: "BackSpase" }, "backspace")))));
}
exports.Keyboard = Keyboard;
