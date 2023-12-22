import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const VehicleMasterTable = () => {
  // Sample data for testing

  const vehicleData = [
    {
      id: 101,
      type: "Car",
      make: "Toyota",
      model: "Camry",
      year: 2022,
      lastService: "2022-12-01",
    },
    {
      id: 102,
      type: "Truck",
      make: "Ford",
      model: "F-150",
      year: 2021,
      lastService: "2022-01-15",
    },
    {
      id: 101,
      type: "Motorcycle",
      make: "Harley-Davidson",
      model: "Sportster",
      year: 2020,
      lastService: "2022-11-05",
    },
    {
      id: 102,
      type: "Car",
      make: "Toyota",
      model: "Camry",
      year: 2022,
      lastService: "2022-12-01",
    },
    {
      id: 101,
      type: "Truck",
      make: "Ford",
      model: "F-150",
      year: 2021,
      lastService: "2022-01-15",
    },
    {
      id: 102,
      type: "Motorcycle",
      make: "Harley-Davidson",
      model: "Sportster",
      year: 2020,
      lastService: "2022-11-05",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>Vehicle Master</h2>
        </div>
        <div>
          <Link to="/AddNewVehicleMaster">
            <button
              style={{
                width: '160px',
                height: '39px',
                padding: 'none',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 4px 8px rgba(0, 0, 0.1, 0.2)',
              }}
            >
              <Typography>+ Add New Vehicle</Typography>
            </button>
          </Link>
        </div>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">Vehicle Id</th>
            <th scope="col">Type</th>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Last Service</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((vehicle, index) => (
            <tr
              key={vehicle.id}
              className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            >
              <th scope="row">{vehicle.id}</th>
              <td>{vehicle.type}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.lastService}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleMasterTable;
