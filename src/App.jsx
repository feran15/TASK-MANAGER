import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Componenets/Nav'
import Homepage from './Componenets/Homepage'
import Mid from './Componenets/Mid'
import Timeline from './Componenets/Timeline';
import Organize from './Componenets/Organize';
import LowerMid from './Componenets/LowerMid';
import Footer from './Componenets/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <section>
      <Router>
        <Nav />
        <Homepage />
        <Mid />
        <Timeline/>
        <Organize/>
        < LowerMid/>
          <Footer/>
        <Routes>
           <Route
            path="/Add-Tasks"
            // element={
            //   <AddTasks
            //      formData={formData}
            //      handleFormChange={handleFormChange}
            //     handleSubmit={handleAddBlog}
            //   />
            // }
          /> 
          <Route path="/login" element={<Login />} /> 
           <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
    </section>
  );
  
};


export default App
