import { useEffect, useMemo } from "react";
import AlertCard from "./AlertCard";

const AlertPanel = ({ alerts }) => {

  // ✅ memoized sorting (best practice)
  const sortedAlerts = useMemo(() => {
    return [...alerts].sort((a, b) => {
      if (a.severity === "critical") return -1;
      if (b.severity === "critical") return 1;
      return 0;
    });
  }, [alerts]);

  // ✅ now dependency is correct
  useEffect(() => {
    sortedAlerts.forEach((alert) => {
      if (alert.severity === "critical") {
        console.log("🚨 Critical Alert:", alert.message);
      }
    });
  }, [sortedAlerts]);

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