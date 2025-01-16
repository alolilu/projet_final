import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const cities = [
    "Paris",
    "Montpellier",
    "Toulon",
    "Aix-en-Provence",
    "Metz",
    "Caen",
    "Marseille",
    "Bordeaux",
    "Grenoble",
    "Clermont-Ferrand",
    "Besançon",
    "Argenteuil",
    "Lyon",
    "Lille",
    "Dijon",
    "Brest",
    "Boulogne-Billancourt",
    "Montreuil",
    "Toulouse",
    "Rennes",
    "Nîmes",
    "Limoges",
    "Orléans",
    "Nancy",
    "Nice",
    "Reims",
    "Angers",
    "Tours",
    "Mulhouse",
    "Roubaix",
    "Nantes",
    "Le Havre",
    "Villeurbanne",
    "Amiens",
    "Rouen",
    "Tourcoing",
    "Strasbourg",
    "Saint-Étienne",
    "Le Mans",
    "Perpignan",
    "Saint-Denis",
    "Nanterre",
  ];

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const cityWeatherPromises = cities.map(async (city) => {
          const geoResponse = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
          );
          const { latitude, longitude } = geoResponse.data.results[0];

          const weatherResponse = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );

          return {
            city,
            temperature: weatherResponse.data.current_weather.temperature,
            condition: weatherResponse.data.current_weather.weathercode,
          };
        });

        const weatherResults = await Promise.all(cityWeatherPromises);
        setWeatherData(weatherResults);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h2>Météo des grandes villes de France</h2>
      <div style={styles.weatherContainer}>
        {weatherData.map((cityData, index) => (
          <div key={index} style={styles.cityWeather}>
            <h3>{cityData.city}</h3>
            <p>Température : {cityData.temperature}°C</p>
            <p>Condition : {cityData.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  weatherContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  cityWeather: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

export default Weather;
