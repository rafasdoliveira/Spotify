import React from 'react';
import { render } from "react-dom";
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq'
import SignUp from './pages/SignUp/SignUp'
import Webplayer from './pages/Webplayer/Webplayer'
import Playlist from './pages/Playlist/Playlist'
import UserOk from './pages/UserOk/UserOk'
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/cadastro'
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/webplayer" element={<Webplayer />}/>
      <Route path="/playlist/:id" element={<Playlist />}/>
      <Route path="/userok" element={<UserOk />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
