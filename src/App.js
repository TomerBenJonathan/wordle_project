import logo from "./logo.svg";
import "./App.css";
import { Board } from "./Board"
import { useState } from "react";
import {useEffect} from 'react';


function App() {

  const MAX_CHARS_IN_ROW = 5;  
  const MAX_ROWS = 5;
  const [count, setCount] = useState(0);
  const [arrayCharsInRow, setArrayCharsInRow] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentPosInRow, setCurrentPosInRow] = useState(0);

  useEffect(() => {
    // if (arrayCharsInRow.length == MAX_CHARS_IN_ROW+1)
    // {
    //   alert("Row is finished");
    // }

  })

  function onClickedChar(clickedChar)
  {
    //setClickedChar("Q");
    if (arrayCharsInRow.length < MAX_CHARS_IN_ROW)
    {
      setArrayCharsInRow([...arrayCharsInRow, clickedChar]);
    
      return;
    }

    setArrayCharsInRow([clickedChar]);

    if (currentRow < MAX_ROWS)
    {
      setCurrentRow(currentRow+1);
    }
  }

  return (
    <div className="App" tabIndex="0" onKeyDown={(event) => onClickedChar(event.key)}>
      <header className="App-header">
        <h3>Wordle</h3>
      </header>
      <div className="main-div">
      
      <Board currentRow={currentRow} arrayCharsInRow={arrayCharsInRow}/>

      <div>Keyboard</div>
      <div className="game-keyboard">
      <div className="game-keyboard-inner">
      <button className="keyboard-key" onClick={() => onClickedChar("Q")} value="Q">q</button>
      <button className="keyboard-key" onClick={() => onClickedChar("W")} value="W">w</button>
      <button className="keyboard-key" onClick={() => onClickedChar("E")} value="E">e</button>
      <button className="keyboard-key" onClick={() => onClickedChar("R")} value="R">r</button>
      <button className="keyboard-key" onClick={() => onClickedChar("T")} value="T">t</button>
      <button className="keyboard-key" onClick={() => onClickedChar("Y")} value="Y">y</button>
      <button className="keyboard-key" onClick={() => onClickedChar("U")} value="U">u</button>
      <button className="keyboard-key" onClick={() => onClickedChar("I")} value="I">i</button>
      <button className="keyboard-key" onClick={() => onClickedChar("O")} value="O">o</button>
      <button className="keyboard-key" onClick={() => onClickedChar("P")}value="P">p</button>


      <button className="keyboard-key" onClick={() => onClickedChar("A")} value="A">a</button>
      <button className="keyboard-key" onClick={() => onClickedChar("S")} value="S">s</button>
      <button className="keyboard-key" onClick={() => onClickedChar("D")} value="D">d</button>
      <button className="keyboard-key" onClick={() => onClickedChar("F")} value="F">f</button>
      <button className="keyboard-key" onClick={() => onClickedChar("G")} value="G">g</button>
      <button className="keyboard-key" onClick={() => onClickedChar("H")} value="H">h</button>
      <button className="keyboard-key" onClick={() => onClickedChar("J")} value="J">j</button>
      <button className="keyboard-key" onClick={() => onClickedChar("K")} value="K">k</button>
      <button className="keyboard-key" onClick={() => onClickedChar("L")} value="L">l</button>


      <button className="keyboard-key" onClick={() => onClickedChar("q")} value="Enter">Enter</button>
      <button className="keyboard-key" onClick={() => onClickedChar("Z")} value="Z">z</button>
      <button className="keyboard-key" onClick={() => onClickedChar("X")} value="X">x</button>
      <button className="keyboard-key" onClick={() => onClickedChar("C")} value="C">c</button>
      <button className="keyboard-key" onClick={() => onClickedChar("V")}value="V">v</button>
      <button className="keyboard-key" onClick={() => onClickedChar("B")} value="B">b</button>
      <button className="keyboard-key" onClick={() => onClickedChar("N")} value="N">n</button>
      <button className="keyboard-key" onClick={() => onClickedChar("M")} value="M">m</button>
      <button className="keyboard-key" value="BackSpase">backspace</button>
      </div>
      
      <h3>{arrayCharsInRow}</h3>
      </div>

      </div>
    </div>
  );
}

export default App;
