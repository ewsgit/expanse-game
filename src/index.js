import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoadingScreen from "./LoadingScreen";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Game from "./Game";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/mainmenu" element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    <div className="absolute top-0 left-0 flex flex-col opacity-50 focus-within:opacity-100 transition-colors">
      <button
        onClick={e => {
          window.location.reload();
        }}
        className="bg-slate-500 p-3 w-max rounded-br-2xl">
        reload
      </button>
      <button
        onClick={e => {
          window.location.href = "/";
        }}
        className="bg-slate-500 p-3 w-max rounded-br-2xl">
        /
      </button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
