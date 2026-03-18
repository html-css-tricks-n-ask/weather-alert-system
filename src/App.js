// src/App.js

import { useEffect, useState } from "react";
import TruckList from "./components/TruckList";
import AlertPanel from "./components/AlertPanel";
import { getWeatherAlerts } from "./services/weatherService";

function App() {
  const [alerts, setAlerts] = useState([]);

  const trucks = ["TRUCK-1", "TRUCK-2", "TRUCK-3"];

  // 🔥 auto refresh every 5 sec
  useEffect(() => {
    const fetchAlerts = () => {
      const data = getWeatherAlerts();
      setAlerts(data);
    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌦️ Weather Alert System</h2>

      <TruckList trucks={trucks} />
      <AlertPanel alerts={alerts} />
    </div>
  );
}

export default App;