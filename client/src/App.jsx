import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import Main from './views/Main';
import View from "./views/View";
import Update from "./views/Update";
import Create from "./views/Create";
import './App.css'

function App() {
    return (
        <div className='App'>
            <h1>Pet Shelter</h1>
            <Link to={"/pets"}>HOME</Link>|
            <Link to={"/pets/create"}>add a pet</Link>
            
            <Routes>
                <Route path="/" element={<Navigate to={'/pets'} />} />
                <Route path="/pets" element={<Main />} />
                <Route path="/pets/:id/" element={<View/>} />
                <Route path="/pets/create" element={<Create />} />
                <Route path="/pets/:id/update" element={<Update/>} />
            </Routes>
            
        </div>
    )
}

export default App
