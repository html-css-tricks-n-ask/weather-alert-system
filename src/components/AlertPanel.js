// src/components/AlertPanel.js

import { useEffect } from "react";
import AlertCard from "./AlertCard";

const AlertPanel = ({ alerts }) => {
  // 🔥 sort critical first
  const sortedAlerts = [...alerts].sort((a, b) => {
    if (a.severity === "critical") return -1;
    if (b.severity === "critical") return 1;
    return 0;
  });

  // 🔥 notify for critical alerts
  useEffect(() => {
    sortedAlerts.forEach((alert) => {
      if (alert.severity === "critical") {
        console.log("🚨 Critical Alert:", alert.message);
      }
    });
  }, [alerts]);

  return (
    <div>
      <h3>⚠️ Weather Alerts</h3>
      {sortedAlerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
    </div>
  );
};

export default AlertPanel;