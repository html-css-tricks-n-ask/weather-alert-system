// src/components/AlertCard.js

const AlertCard = ({ alert }) => {
  const isCritical = alert.severity === "critical";

  return (
    <div
      style={{
        border: "1px solid",
        margin: "10px 0",
        padding: "12px",
        borderRadius: "8px",
        background: isCritical ? "#ff4d4f" : "#e6f7ff",
        color: isCritical ? "white" : "black",
      }}
    >
      <h4>{alert.type}</h4>
      <p>{alert.message}</p>
      <strong>{alert.truckId}</strong>
    </div>
  );
};

export default AlertCard;