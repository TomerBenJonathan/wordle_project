import logo from "./logo.svg";
import "./App.css";
import { Board } from "./Board";
import { useState } from "react";
import { useEffect } from "react";
import { Keyboard } from "./Keyboard";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const MAX_CHARS_IN_ROW = 5;
  const MAX_ROWS = 5;
  const [count, setCount] = useState(0);
  const [arrayCharsInRow, setArrayCharsInRow] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentPosInRow, setCurrentPosInRow] = useState(0);
  const [secretWords, setSecretWords] = useState(["WORLD", "BOARD", 'FLOOR','DREAM','GREEN']);
  const [currentSecretWordIndex, setCurrentSecretWordIndex] = useState(0);

  useEffect(() => {

      setCurrentSecretWordIndex(()=> Math.floor(Math.random() * (secretWords.length)));
      
  }, [secretWords]);

  
  console.log(`Secret word is: ${secretWords[currentSecretWordIndex]}`);

  
  function onClickedChar(clickedChar) {
    
    clickedChar = clickedChar.toUpperCase();
    let validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!validChars.includes(clickedChar))
    {
      return;
    }

    if (arrayCharsInRow.join("") === secretWords[currentSecretWordIndex])
    {
      alert ("You win !");
    }

    if (arrayCharsInRow.length + 1 === MAX_CHARS_IN_ROW) {
      setArrayCharsInRow([...arrayCharsInRow, clickedChar]);
      if (arrayCharsInRow.length === MAX_CHARS_IN_ROW) {
        alert("done");
      }
      return;
    }
    if (arrayCharsInRow.length < MAX_CHARS_IN_ROW) {
      setArrayCharsInRow([...arrayCharsInRow, clickedChar]);

      return;
    }

    setArrayCharsInRow([clickedChar]);

    if (currentRow < MAX_ROWS) {
      setCurrentRow(currentRow + 1);
    }
  }

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={(event) => onClickedChar(event.key.toLocaleUpperCase())}
    >
      <header className="App-header">
        <h3>Wordle</h3>
      </header>
      <div className="main-div">
        <Board currentRow={currentRow} arrayCharsInRow={arrayCharsInRow} 
                secretWords={secretWords} currentSecretWordIndex={currentSecretWordIndex}/>
        <Keyboard onClickedChar={onClickedChar} arrayCharsInRow={arrayCharsInRow}
                secretWords={secretWords} currentSecretWordIndex={currentSecretWordIndex}/>
      </div>
    </div>
  );
}

export default App;
