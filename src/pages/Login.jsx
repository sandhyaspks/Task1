import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser, setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Simulated user database
  const userDatabase = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    management: { username: "college", password: "college123", role: "collegeManagement" },
    student: { username: "student", password: "student123", role: "student" },
  };

  const handleLogin = () => {
    const foundUser = Object.values(userDatabase).find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setUser({ name: username, role: foundUser.role });
      setIsAuth(true);
      // Navigate to the appropriate role page
      if (foundUser.role === "admin") navigate("/admin");
      else if (foundUser.role === "collegeManagement") navigate("/college-management");
      else if (foundUser.role === "student") navigate("/student");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
