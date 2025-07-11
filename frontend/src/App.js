import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvitationPage from "./components/InvitationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InvitationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;