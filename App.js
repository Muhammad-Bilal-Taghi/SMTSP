
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route , BrowserRouter} from 'react-router-dom';
import Login from './components/Loginstudent/Login';
import Signup from './components/Loginstudent/Signup';
import LoginA from './components/Adminlogin/LoginA';
import Navs from './components/Navs';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navs/>
           <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/admin" element={<LoginA/>}></Route>
            
           
           </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
