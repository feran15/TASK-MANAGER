import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Pages from './Componenets/Pages';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Pages from './Componenets/Pages'
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const hidePagesRoutes = ['/login', '/register','/'];
  const showPages = !hidePagesRoutes.includes(location.pathname.toLowerCase());

  return (
    <section>
      {/* Conditional rendering of Pages component */}
      {showPages && <Pages />}

      {/* Buttons to navigate between routes */}
      {/* <div>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/register')}>Go to Register</button>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div> */}

      {/* Route definitions */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  );
}

    // <section>
    //   <Router>
    //     <Pages />
    //     <Routes>
    //        <Route path="/register" element={<Register />} /> 
    //       <Route path="/login" element={<Login />} /> 
    //     </Routes>
    //   </Router>
    // </section>
 


export default App
