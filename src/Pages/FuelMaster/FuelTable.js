import { Typography } from "@mui/material";
import React from "react";
import './FuelPage.css'
import { Link } from "react-router-dom";
// Import your CSS file

const FuelTable = () => {
  // Sample data for testing
  const fuelData = [
    { id: 1, name: "Petrol", measurement: "Litres" },
    { id: 2, name: "Diesel", measurement: "Litres" },
    { id: 3, name: "Natural Gas", measurement: "Cubic Meters" },
    { id: 4, name: "Petrol", measurement: "Litres" },
    { id: 5, name: "Diesel", measurement: "Litres" },
    { id: 6, name: "Natural Gas", measurement: "Cubic Meters" },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>Fuel Master</h2>
        </div>
        <Link to="/AddNewFuelType">
          <button
            style={{
              width: "160px",
              height: "39px",
              padding: "none",
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.2)",
            }}
          >
            <Typography>+ Add New Fuel</Typography>
          </button>
        </Link>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">Fuel ID</th>
            <th scope="col">Fuel Name</th>
            <th scope="col">Fuel Measurement</th>
          </tr>
        </thead>
        <tbody>
          {fuelData.map((fuel, index) => (
            <tr
              key={fuel.id}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <th scope="row">{fuel.id}</th>
              <td>{fuel.name}</td>
              <td>{fuel.measurement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelTable;
