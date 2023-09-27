import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import CreateUser from "./components/users/CreateUser";
import GetAllUsers from "./components/users/GetAllUsers";
import EditUser from "./components/users/EditUser";
import WelcomePage from "./components/WelcomePage";
import LogInPage from "./components/users/LogInPage";
import CreateNote from "./components/notes/CreateNote";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<CreateUser />} />
                <Route path="/users" element={<GetAllUsers />} />
                <Route path="/users/:id" element={<EditUser />}  />
                <Route path="/note/create" element={<CreateNote/>}  />
                {/*<Route path="/note/:id" element={<EditUser />}  />*/}
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
