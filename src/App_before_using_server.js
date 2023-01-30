import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { useState } from "react";
import { useEffect } from "react";
import { Keyboard } from "./Keyboard";
import { click } from "@testing-library/user-event/dist/click";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const MAX_CHARS_IN_ROW = 5;
  const MAX_ROWS = 5;
  const [arrayCharsInRow, setArrayCharsInRow] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  
  const [secretWords, setSecretWords] = useState(["WORLD", "BOARD", 'FLOOR','DREAM','GREEN']);
  
  const [currentSecretWordIndex, setCurrentSecretWordIndex] = useState(0);
  const [restartGame, setRestartGame] = useState(false);

  const [modalEndGameMessage, setModalEndGameMessage] = useState("");
  const [showModalEndGame, setShowModalEndGame] = useState(false);

  const [showModalInfo, setShowModalInfo] = useState(false);

  
  const handleCloseModalEndGame = () => setShowModalEndGame(()=>false);
  const handleShowModalEndGame = () => setShowModalEndGame(()=>true);

  
  const handleCloseModalInfo = () => setShowModalInfo(()=>false);
  const handleShowModalInfo = () => setShowModalInfo(()=>true);


  const handleRestartGame = () => {
    handleCloseModalEndGame();
    setRestartGame(()=>true);
    setCurrentRow(() => 0);
    setCurrentSecretWordIndex(()=> Math.floor(Math.random() * (secretWords.length)));
    setArrayCharsInRow(() => []);
  }

  const handleContinueGame = () => {setRestartGame(()=>false);}



  const getSecretWordFromServer = async () => {
      const response = await axios.get("http://localhost:3333/secretWord"); 
      if (response.status==200)
      {
        console.log("Secret word from server: ", response.data);   
      }
      else
      {
        console.log("Error: Failed to get secret word from server");   
      }
  }


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

    if ((arrayCharsInRow.join("") + clickedChar) === secretWords[currentSecretWordIndex])
    {
      setTimeout(() => {
        setModalEndGameMessage(()=>"Yeh, you win!");
        setShowModalEndGame(()=>true);
      }, "500")
    }
    else
    {
      if (currentRow == MAX_ROWS-1 && arrayCharsInRow.length === MAX_CHARS_IN_ROW-1)
        {
          setTimeout(() => {
            setModalEndGameMessage(()=>"mmm... you lost");
            setShowModalEndGame(()=>true);
          }, "500")
        }
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

      
      <div className = "container mt-4 App-header">
          <div className = "row">
            <div className = "col"></div>
            <div className = "col"><h4>Wordle</h4></div>
            <div className = "col"><button onClick={handleShowModalInfo}>Info</button></div>
          </div>
      </div>

      <Modal show={showModalEndGame} onHide={handleCloseModalEndGame}>
          <Modal.Header closeButton>
            <Modal.Title>End Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalEndGameMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleRestartGame}>
              Restart Game
            </Button>
          </Modal.Footer>
      </Modal>

      <Modal show={showModalInfo} onHide={handleCloseModalInfo}>
          <Modal.Header closeButton>
            <Modal.Title>Wordle Game - info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ul>
                  <li>Guess the secret word in 5 tries</li>
                  <li>Each guess must be a valid 5 english letters word</li>
                  <li>Board and keyboard colors will change to help you</li>
              </ul>
              <img className="info_image" src={require('./img/wordle_info.png')} alt="wordle explained" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModalInfo}>
              OK
            </Button>
          </Modal.Footer>
      </Modal>

      <div className="main-div">
        <Board currentRow={currentRow} arrayCharsInRow={arrayCharsInRow} 
                secretWords={secretWords} currentSecretWordIndex={currentSecretWordIndex} 
                restartGame={restartGame} handleContinueGame={handleContinueGame}/>
        <Keyboard onClickedChar={onClickedChar} arrayCharsInRow={arrayCharsInRow}
                secretWords={secretWords} currentSecretWordIndex={currentSecretWordIndex} 
                restartGame={restartGame} handleContinueGame={handleContinueGame}/>
      </div>
    </div>
  );
}

export default App;
