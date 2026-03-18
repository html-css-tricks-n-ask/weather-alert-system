// src/components/TruckList.js

const TruckList = ({ trucks }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>🚚 Truck List</h3>
      {trucks.map((truck) => (
        <p key={truck}>{truck}</p>
      ))}
    </div>
  );
};

export default TruckList;