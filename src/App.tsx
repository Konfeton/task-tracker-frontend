import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateUser from "./components/CreateUser";
import GetAllUsers from "./components/GetAllUsers";
import EditUser from "./components/EditUser";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<CreateUser />} />
                <Route path="/users" element={<GetAllUsers />} />
                <Route path="/users/:id" element={<EditUser />}  />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
