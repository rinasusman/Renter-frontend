import React from 'react';
import Home from './pages/Clients/Home';
import LoginForm from './pages/Admin/LoginForm';
import AdminHome from './pages/Admin/AdminHome'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserForm from './pages/Admin/UserForm';
import CategoryList from './pages/Admin/CategoryList';

function App() {
  const token = localStorage.getItem('admintoken')

  return (
    <>   <ToastContainer />
      <Router>

        <Routes>

          <Route path="/admin" element={<LoginForm />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={token ? < AdminHome /> : <Navigate to={'/admin'} />} />
          <Route exact path="/userlist" element={<UserForm />} />
          <Route exact path="/category" element={<CategoryList />} />
        </Routes>

      </Router>
    </>
  );
}


export default App;
