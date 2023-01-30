import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import { useState,  useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVER_BASE_URL = "http://localhost:3333";

function Navbar() {

    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);

    const handleCloseModalLogin = () => setShowModalLogin(()=>false);
    const handleShowModalLogin = () => setShowModalLogin(()=>true);
  
    const handleCloseModalInfo = () => setShowModalInfo(()=>false);
    const handleShowModalInfo = () => setShowModalInfo(()=>true);

    
    const [username, setUsername] = useState('Guest');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    useEffect(()=> {
        let user = localStorage.getItem('username');
        if (!user) throw new Error('not find user in localstorage')
        setUsername(user);
    }, [])


    const loginInServer = async (username: string, password: string) => {
        try
        {  
            const {data, status} = await axios.post(SERVER_BASE_URL + "/login", 
                                                        {username: username, password: password}); 
            if (status===200)
            {
              console.log("response from server: ", data);
              
              return data;    
            }
            else
            {
              console.log("Error: Failed to login in server");   
              alert("Error: Failed to login in server. server status=" + status);
            }
        }
        catch( e )
        {
            console.log("Error: Failed to login in server.");   
            alert("Error: Failed to login in server. " + (e as {message: string}).message)
        }
  
        return "failed";
    }
   

    
    const handleLogin = async () => {
        let serverResponse = await loginInServer(username, password);
        if (serverResponse === "ok") {
            handleCloseModalLogin();
           
            console.log("navigate username=", username);
           
            localStorage.setItem('username', username);
            navigate('/game');
        }
        else{
            alert("Invalid user");
        }
    }

    const handleLogut = async () => {
        localStorage.setItem('username', "Guest");
        setUsername("Guest");
        navigate('/game');
    }

    const getInputElement = (e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>): HTMLInputElement => {
        const target = e.target as HTMLInputElement
        if (!target) throw new Error('target must be not null')
        return target as HTMLInputElement
    }

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(getInputElement(e).value);
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(getInputElement(e).value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        handleLogin();
    }

    

    return (
        <>
        <nav>
            <ul className="ulNavbar">
                
                <li className="liNavbar">
                    <Link className="aNavbar" style={{color: "cyan"}} to="/">Wordle Game</Link>
                </li>
                
                {(!username || username === "Guest") &&
                <li className="liNavbar">
                    <Link className="aNavbar" to="#" onClick={()=>handleShowModalLogin()}>Login</Link>
                </li> }

                {(username !== "Guest") && 
                <li className="liNavbar">
                    <Link className="aNavbar" to="#" onClick={()=>handleLogut()}>Logout</Link>
                </li> }

                <li className="liNavbar">
                    
                    <Link className="aNavbar" to="#" onClick={()=>handleShowModalInfo()}>Info</Link>
                </li>
            </ul>
        </nav>


        <Modal show={showModalLogin} onHide={handleCloseModalLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Wordle Game - Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={(e) => {handleSubmit(e)}}>
                    <div className="Auth-form-content">
                    
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            value={username}
                            required
                            onChange={(e) => {handleChangeUsername(e)}}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        required
                        onChange={(e) => {handleChangePassword(e)}}

                        />
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                    </div>
                </form>
                </div>
          </Modal.Body>
          
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


        </>
    )
}

export default Navbar;




