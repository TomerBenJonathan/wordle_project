import "../App.css";
import { Board } from "./Board";
import { useState, useRef, useEffect } from "react";
import { Keyboard } from "./Keyboard";
import { click } from "@testing-library/user-event/dist/click";
import { Modal, Button } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import axios from "axios";

const SERVER_BASE_URL = "http://localhost:3333";

function Game() {
  const MAX_CHARS_IN_ROW = 5;
  const MAX_ROWS = 5;
  const [arrayCharsInRow, setArrayCharsInRow] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  
  const [secretWord, setSecretWord] = useState("");
  const wasSecretWordFetchedRef = useRef(false);

  const [currentSecretWordIndex, setCurrentSecretWordIndex] = useState(0);
  const [restartGame, setRestartGame] = useState(false);

  const [modalEndGameMessage, setModalEndGameMessage] = useState("");
  const [showModalEndGame, setShowModalEndGame] = useState(false);

  const [showModalInfo, setShowModalInfo] = useState(false);

  
  const handleCloseModalEndGame = () => setShowModalEndGame(()=>false);
  const handleShowModalEndGame = () => setShowModalEndGame(()=>true);

  
  const handleCloseModalInfo = () => setShowModalInfo(()=>false);
  const handleShowModalInfo = () => setShowModalInfo(()=>true);


  

  const location = useLocation();

  const handleRestartGame = async () => {
    handleCloseModalEndGame();
    await getSecretWordFromServer();
    setRestartGame(()=>true);
    setCurrentRow(() => 0);
    setArrayCharsInRow(() => []);
  }

  const handleContinueGame = () => {setRestartGame(()=>false);}



  const getSecretWordFromServer = async () => {
      try
      {  
          const {data, status} = await axios.get(SERVER_BASE_URL + "/secretWord"); 
          if (status==200)
          {
             
          }
          else
          {
            
            alert("Error: Failed to get secret word from server. server status=" + status);
          }
          setSecretWord(data);
      }
      catch( e )
      {
            
          alert("Error: Failed to get secret word from server. " + e.message)
      }

  }
  

  useEffect(() => {
      if (wasSecretWordFetchedRef.current) return;
      wasSecretWordFetchedRef.current = true;
      getSecretWordFromServer(); 
      
  }, []);


  function onClickedChar(clickedChar) {
    
    clickedChar = clickedChar.toUpperCase();
    let validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!validChars.includes(clickedChar))
    {
      return;
    }

    if ((arrayCharsInRow.join("") + clickedChar) === secretWord)
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

    

    if (arrayCharsInRow.length < MAX_CHARS_IN_ROW) {
      setArrayCharsInRow([...arrayCharsInRow, clickedChar]);

      return;
    }

    setArrayCharsInRow([clickedChar]);

    if (currentRow < MAX_ROWS) {
      setCurrentRow(currentRow + 1);
    }
  }

  
  let username = localStorage.getItem('username');

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={(event) => onClickedChar(event.key.toLocaleUpperCase())}
    >

      
      <h3>Playing as {username ? username : "Guest"}</h3>

      
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
              <img className="info_image" src={require('../img/wordle_info.png')} alt="wordle explained" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModalInfo}>
              OK
            </Button>
          </Modal.Footer>
      </Modal>

      <div className="main-div">
        <Board currentRow={currentRow} arrayCharsInRow={arrayCharsInRow} 
                secretWord={secretWord}
                restartGame={restartGame} handleContinueGame={handleContinueGame}/>
        <Keyboard onClickedChar={onClickedChar} arrayCharsInRow={arrayCharsInRow}
                secretWord={secretWord}
                restartGame={restartGame} handleContinueGame={handleContinueGame}/>
      </div>
    </div>
  );
}

export default Game;
