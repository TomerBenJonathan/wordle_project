import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Game from "./components/Game";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NoPage from "./components/NoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>        
            <Route index element={<Home/>}/>
            <Route path="game" element={<Game/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

