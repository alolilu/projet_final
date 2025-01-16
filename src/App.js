import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={styles.container}>
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
            <Route path="/dashboard" element={<ProtectedDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const ProtectedDashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Dashboard />;
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "80vh",
    margin: 0,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#3f51b5",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#303f9f",
  },
  content: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(80vh - 80px)",
  },
};

export default App;
