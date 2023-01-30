import { useState, useEffect } from "react";

export function Board(props: {
  secretWord: string, 
  currentRow: number, 
  arrayCharsInRow: string[],
  restartGame: any,
  handleContinueGame: any
}) {
  const [cellsValue, setCellsValue] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [cellsColor, setCellsColor] = useState([
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
  ]);

  const [cellsBorderColor, setCellsBorderColor] = useState([
    ["red", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
  ]);

  const countCharInString = (char: string, str: string) => str.split(char).length;

  const handleRestartBoard = () => {
    setCellsValue(() => [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);

    setCellsColor(() => [
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
    ]);

    setCellsBorderColor(() => [
      ["red", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
      ["black", "black", "black", "black", "black"],
    ]);
  };

  const changeTooManyYellowsToGray = () => {
    const secretWord = props.secretWord;
    const currentRow = props.currentRow;
    let arrayCharsInRowTemp = [...props.arrayCharsInRow];

    let cellsColorTemp = [...cellsColor];

    arrayCharsInRowTemp.forEach(function (currentChar, i) {
      if (cellsColor[currentRow][i] === "yellow") {
        let countCharInGuessedRow = countCharInString(
          currentChar,
          arrayCharsInRowTemp.join("")
        );
        let countCharInSecretWord = countCharInString(currentChar, secretWord);

        if (countCharInGuessedRow > countCharInSecretWord) {
          cellsColorTemp[currentRow][i] = "gray";
        }

        arrayCharsInRowTemp[i] = "$";
      }
    });

    setCellsColor(cellsColorTemp);
  };

  const paintCells = () => {
    let secretWord = props.secretWord;
    let cellsColorTemp = [...cellsColor];

    props.arrayCharsInRow.forEach(function (currentChar, i) {
      if (currentChar === secretWord.charAt(i)) {
        cellsColorTemp[props.currentRow][i] = "green";
      } else if (secretWord.includes(currentChar)) {
        cellsColorTemp[props.currentRow][i] = "yellow";
      } else {
        cellsColorTemp[props.currentRow][i] = "gray";
      }
    });

    changeTooManyYellowsToGray();
  };

  useEffect(() => {
    if (props.restartGame) {
      handleRestartBoard();
      props.handleContinueGame();
      return;
    }

    if (props.currentRow > 4)
    {
      return;
    }

    let cellsValueTemp = [...cellsValue];
    let cellsBorderColorTemp = [...cellsBorderColor];

    if (props.arrayCharsInRow.length === 0) {
      cellsBorderColorTemp[props.currentRow][0] = "red";
    }

    props.arrayCharsInRow.forEach(function (currentChar, i) {
      cellsValueTemp[props.currentRow][i] = currentChar;

      let cellsBorderColorTemp = [...cellsBorderColor];
      cellsBorderColorTemp[props.currentRow][i] = "#301ad1";

      if (i < 4) {
        let cellsBorderColorTemp = [...cellsBorderColor];
        cellsBorderColorTemp[props.currentRow][i + 1] = "red";
      } else if (i === 4 && props.currentRow <= 4) {
        paintCells();
      }

      if (i === 4 && props.currentRow < 4) {
        let cellsBorderColorTemp = [...cellsBorderColor];
        cellsBorderColorTemp[props.currentRow + 1][0] = "red";
      }

      setCellsValue(cellsValueTemp);
      setCellsBorderColor(cellsBorderColorTemp);
    });
  }, [props]);

  return (
    <div className="game-board">
      <div className="game-board-inner">
        <div className="game-row">
          <div
            className="game-box line-1 col-2"
            style={{
              color: cellsColor[0][0],
              border: "2px solid " + cellsBorderColor[0][0],
            }}
          >
            {cellsValue[0][0]}
          </div>
          <div
            className="game-box line-1 col-2"
            style={{
              color: cellsColor[0][1],
              border: "2px solid " + cellsBorderColor[0][1],
            }}
          >
            {cellsValue[0][1]}
          </div>
          <div
            className="game-box line-1 col-2"
            style={{
              color: cellsColor[0][2],
              border: "2px solid " + cellsBorderColor[0][2],
            }}
          >
            {cellsValue[0][2]}
          </div>
          <div
            className="game-box line-1 col-2"
            style={{
              color: cellsColor[0][3],
              border: "2px solid " + cellsBorderColor[0][3],
            }}
          >
            {cellsValue[0][3]}
          </div>
          <div
            className="game-box line-1 col-2"
            style={{
              color: cellsColor[0][4],
              border: "2px solid " + cellsBorderColor[0][4],
            }}
          >
            {cellsValue[0][4]}
          </div>
        </div>
        <div className="game-row">
          <div
            className="game-box line-2 col-2"
            style={{
              color: cellsColor[1][0],
              border: "2px solid " + cellsBorderColor[1][0],
            }}
          >
            {cellsValue[1][0]}
          </div>
          <div
            className="game-box line-2 col-2"
            style={{
              color: cellsColor[1][1],
              border: "2px solid " + cellsBorderColor[1][1],
            }}
          >
            {cellsValue[1][1]}
          </div>
          <div
            className="game-box line-2 col-2"
            style={{
              color: cellsColor[1][2],
              border: "2px solid " + cellsBorderColor[1][2],
            }}
          >
            {cellsValue[1][2]}
          </div>
          <div
            className="game-box line-2 col-2"
            style={{
              color: cellsColor[1][3],
              border: "2px solid " + cellsBorderColor[1][3],
            }}
          >
            {cellsValue[1][3]}
          </div>
          <div
            className="game-box line-2 col-2"
            style={{
              color: cellsColor[1][4],
              border: "2px solid " + cellsBorderColor[1][4],
            }}
          >
            {cellsValue[1][4]}
          </div>
        </div>
        <div className="game-row">
          <div
            className="game-box line-3 col-2"
            style={{
              color: cellsColor[2][0],
              border: "2px solid " + cellsBorderColor[2][0],
            }}
          >
            {cellsValue[2][0]}
          </div>
          <div
            className="game-box line-3 col-2"
            style={{
              color: cellsColor[2][1],
              border: "2px solid " + cellsBorderColor[2][1],
            }}
          >
            {cellsValue[2][1]}
          </div>
          <div
            className="game-box line-3 col-2"
            style={{
              color: cellsColor[2][2],
              border: "2px solid " + cellsBorderColor[2][2],
            }}
          >
            {cellsValue[2][2]}
          </div>
          <div
            className="game-box line-3 col-2"
            style={{
              color: cellsColor[2][3],
              border: "2px solid " + cellsBorderColor[2][3],
            }}
          >
            {cellsValue[2][3]}
          </div>
          <div
            className="game-box line-3 col-2"
            style={{
              color: cellsColor[2][4],
              border: "2px solid " + cellsBorderColor[2][4],
            }}
          >
            {cellsValue[2][4]}
          </div>
        </div>
        <div className="game-row">
          <div
            className="game-box line-4 col-2"
            style={{
              color: cellsColor[3][0],
              border: "2px solid " + cellsBorderColor[3][0],
            }}
          >
            {cellsValue[3][0]}
          </div>
          <div
            className="game-box line-4 col-2"
            style={{
              color: cellsColor[3][1],
              border: "2px solid " + cellsBorderColor[3][1],
            }}
          >
            {cellsValue[3][1]}
          </div>
          <div
            className="game-box line-4 col-2"
            style={{
              color: cellsColor[3][2],
              border: "2px solid " + cellsBorderColor[3][2],
            }}
          >
            {cellsValue[3][2]}
          </div>
          <div
            className="game-box line-4 col-2"
            style={{
              color: cellsColor[3][3],
              border: "2px solid " + cellsBorderColor[3][3],
            }}
          >
            {cellsValue[3][3]}
          </div>
          <div
            className="game-box line-4 col-2"
            style={{
              color: cellsColor[3][4],
              border: "2px solid " + cellsBorderColor[3][4],
            }}
          >
            {cellsValue[3][4]}
          </div>
        </div>
        <div className="game-row">
          <div
            className="game-box line-5 col-2"
            style={{
              color: cellsColor[4][0],
              border: "2px solid " + cellsBorderColor[4][0],
            }}
          >
            {cellsValue[4][0]}
          </div>
          <div
            className="game-box line-5 col-2"
            style={{
              color: cellsColor[4][1],
              border: "2px solid " + cellsBorderColor[4][1],
            }}
          >
            {cellsValue[4][1]}
          </div>
          <div
            className="game-box line-5 col-2"
            style={{
              color: cellsColor[4][2],
              border: "2px solid " + cellsBorderColor[4][2],
            }}
          >
            {cellsValue[4][2]}
          </div>
          <div
            className="game-box line-5 col-2"
            style={{
              color: cellsColor[4][3],
              border: "2px solid " + cellsBorderColor[4][3],
            }}
          >
            {cellsValue[4][3]}
          </div>
          <div
            className="game-box line-5 col-2"
            style={{
              color: cellsColor[4][4],
              border: "2px solid " + cellsBorderColor[4][4],
            }}
          >
            {cellsValue[4][4]}
          </div>
        </div>
      </div>
    </div>
  );
}
