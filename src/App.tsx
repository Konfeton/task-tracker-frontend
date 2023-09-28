import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import CreateUser from "./components/users/CreateUser";
import GetAllUsers from "./components/users/GetAllUsers";
import EditUser from "./components/users/EditUser";
import WelcomePage from "./components/WelcomePage";
import LogInPage from "./components/users/LogInPage";
import CreateNote from "./components/notes/CreateNote";
import Navbar from "./layout/Navbar";
import GetAllNotes from "./components/notes/GetAllNotes";
import EditNote from "./components/notes/EditNote";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<CreateUser />} />
                <Route path="/users" element={<GetAllUsers />} />
                <Route path="/users/:id" element={<EditUser />}  />
                <Route path="/notes" element={<GetAllNotes/>}  />
                <Route path="/notes/create" element={<CreateNote/>}  />
                <Route path="/notes/:id" element={<EditNote />}  />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
