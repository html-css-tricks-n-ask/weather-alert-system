// src/services/weatherService.js

export const getWeatherAlerts = () => {
  const alerts = [
    {
      id: 1,
      truckId: "TRUCK-1",
      type: "Storm",
      severity: "critical",
      message: "Heavy storm ahead! Reduce speed immediately.",
    },
    {
      id: 2,
      truckId: "TRUCK-2",
      type: "Rain",
      severity: "normal",
      message: "Light rain expected. Drive carefully.",
    },
    {
      id: 3,
      truckId: "TRUCK-3",
      type: "Fog",
      severity: "critical",
      message: "Low visibility due to fog. Use fog lights.",
    },
  ];

  // simulate dynamic updates
  return alerts.sort(() => Math.random() - 0.5);
};