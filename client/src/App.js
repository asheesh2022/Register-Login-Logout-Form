import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [user,setLoginUser]  = useState({})
  return (
     
      <>
      <BrowserRouter>
            <Routes>
              <Route exact path= '/' element={user && user._id ? <HomePage setLoginUser = {setLoginUser}  /> : <LoginPage setLoginUser = {setLoginUser}  />} />
              <Route path= '/register' element={<RegisterPage />} />
              <Route path= '/login' element={<LoginPage setLoginUser = {setLoginUser}   />} />
            </Routes>
        </BrowserRouter>
      {/* <RegisterPage/> */}
      </>

  );
}

export default App;
