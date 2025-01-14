import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <h1 style={styles.brand}>Mon Application</h1>
          <ul style={styles.navLinks}>
            <li>
              <Link to="/login" style={styles.link}>
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/register" style={styles.link}>
                Inscription
              </Link>
            </li>
          </ul>
        </nav>
        <div style={styles.content}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ccc",
  },
  brand: {
    margin: 0,
    fontSize: "24px",
  },
  navLinks: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
  },
  content: {
    padding: "20px",
  },
};

export default App;
