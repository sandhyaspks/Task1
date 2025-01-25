import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import CollegeManagementPage from "./pages/CollegeManagementPage";
import StudentPage from "./pages/StudentPage";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const [user, setUser] = useState(null); // User data will include { name, role }
  const [isAuth, setIsAuth] = useState(false); // Tracks authentication state

  return (
    <Router>
      <div className="App">
        <h1>Role-Based Authentication App</h1>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/college-management">College Management</Link></li>
            <li><Link to="/student">Student</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} setIsAuth={setIsAuth} />} />
          <Route path="/admin" element={<AdminPage isAuth={isAuth} user={user} />} />
          <Route
            path="/college-management"
            element={<CollegeManagementPage isAuth={isAuth} user={user} />}
          />
          <Route path="/student" element={<StudentPage isAuth={isAuth} user={user} />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
