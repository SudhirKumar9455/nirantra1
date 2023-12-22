import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Dropdown from "react-bootstrap/Dropdown";
import saveFormData from "./saveFormData";
import { v4 as uuidv4 } from "uuid";
const measurementData = [
  "Gallon",
  "Litres",
  "Imperial Gallon",
  "Barrel",
  "Cubic Meters",
  "Cubic Foot",
  "Kiloliters",
  "Megajoule(MG)",
  "Gigajoule(GJ)",
];

const AddNewFuelType = () => {
  // const history = useHistory();
  const [selectedMeasurement, setSelectedMeasurement] = useState("");

  const handleMeasurementSelect = (measurement) => {
    setSelectedMeasurement(measurement);
    // Generate and set fuel ID based on the selected measurement and fuel type
    setFuelId(generateFuelId(measurement, fuelType));
  };
  const generateFuelId = (measurement, fuelType) => {
    // You can customize the ID generation logic based on your requirements
    return `${measurement.substring(0, 3)}-${fuelType.substring(
      0,
      3
    )}-${uuidv4()}`;
  };

  const [fuelId, setFuelId] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [measurementType, setMeasurementType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormData({
      fuelId,
      fuelType,
      measurementType,
    });

    setFuelId("");
    setFuelType("");
    setMeasurementType("");
  };
  const handleClickSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit(e); // Call the handleSubmit function
    alert("Data saved");
    window.history.back();
  };

  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const formStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "450px",
    margin: "none",
    height: "300px",
    backgroundColor: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <Header />
        <h2>Fuel Master</h2>
        <div style={formStyle}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="fuelId">Fuel ID</label>
                <input
                  type="text"
                  id="fuelId"
                  value={fuelId}
                  onChange={(e) => setFuelId(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  id="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                >
                  <option value="">Select Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hydrogen">Hydrogen</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <label htmlFor="measurementType">Measurement Type</label>
                <br />
                <select
                  value={selectedMeasurement}
                  onChange={(e) => handleMeasurementSelect(e.target.value)}
                >
                  <option value="">Measurement</option>
                  {measurementData.map((measurement, index) => (
                    <option key={index} value={measurement}>
                      {measurement}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ marginTop: "5%", justifyContent: "center" }}>
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  width: "280px",
                  padding: "7px 30px 7px 30px",
                  height: "40px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                type="submit"
                onClick={handleClickSubmit} // Add onClick handler here
              >
                <h5>
                  <b>Submit</b>
                </h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewFuelType;
