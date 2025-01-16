import React, { useState, useEffect } from "react";
import Weather from "./Weather";

function Dashboard() {
  const [showWeather, setShowWeather] = useState(false);
  const userEmail = localStorage.getItem("email");

  const toggleWeather = () => {
    setShowWeather(!showWeather);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Bienvenue sur le tableau de bord</h1>
        <p style={styles.subtitle}>
          Vous êtes bien connecté en tant que {userEmail}
        </p>
      </div>
      <div style={styles.content}>
        <h2>Contenu principal</h2>
        <p>Explorez vos options et commencez à utiliser votre application.</p>
        <button style={styles.button} onClick={toggleWeather}>
          {showWeather
            ? "Cacher la météo"
            : "Afficher la météo des grandes villes"}
        </button>

        {/* Afficher la météo si l'état showWeather est true */}
        {showWeather && <Weather />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
  },
  subtitle: {
    fontSize: "1.2rem",
    margin: "10px 0 0",
  },
  content: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#4a90e2",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Dashboard;
