import "./App.css";
import {useEffect} from 'react';


export function Keyboard(props){

return (

    <div>
<div>Keyboard</div>
      <div className="game-keyboard">
      <div className="game-keyboard-inner">

      <div className="first-row"> 
      <button className="keyboard-key" onClick={() => props.onClickedChar("Q")} value="Q">q</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("W")} value="W">w</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("E")} value="E">e</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("R")} value="R">r</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("T")} value="T">t</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("Y")} value="Y">y</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("U")} value="U">u</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("I")} value="I">i</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("O")} value="O">o</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("P")}value="P">p</button>
      </div> 
      <div className="second-row"></div>
      <button className="keyboard-key" onClick={() => props.onClickedChar("A")} value="A">a</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("S")} value="S">s</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("D")} value="D">d</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("F")} value="F">f</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("G")} value="G">g</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("H")} value="H">h</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("J")} value="J">j</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("K")} value="K">k</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("L")} value="L">l</button>
      </div>

      <div className="third-row">
      <button className="keyboard-key" onClick={() => props.onClickedChar("q")} value="Enter">Enter</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("Z")} value="Z">z</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("X")} value="X">x</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("C")} value="C">c</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("V")}value="V">v</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("B")} value="B">b</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("N")} value="N">n</button>
      <button className="keyboard-key" onClick={() => props.onClickedChar("M")} value="M">m</button>
      <button className="keyboard-key" value="BackSpase">backspace</button>
      </div>
      
      
      {/* <h3>{proarrayCharsInRow}</h3> */}
      </div>
      </div>
)
}