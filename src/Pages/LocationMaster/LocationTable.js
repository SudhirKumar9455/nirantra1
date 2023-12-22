import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LocationTable = () => {
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
          <h2>Location Master</h2>
        </div>
        <Link to="/AddNewLocationMaster">
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
            <Typography>+ Add New Location</Typography>
          </button>
        </Link>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">Location Id</th>
            <th scope="col">Location Name</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even-row">
            <th scope="row">1</th>
            <td>LOC101</td>
            <td>212</td>
            <td>121</td>
          </tr>
          <tr className="odd-row">
            <th scope="row">2</th>
            <td>LOC102</td>
            <td>111</td>
            <td>121</td>
          </tr>
          <tr className="even-row">
            <th scope="row">3</th>
            <td>LOC103</td>
            <td>213</td>
            <td>121</td>
          </tr>
          <tr className="odd-row">
            <th scope="row">4</th>
            <td>LOC104</td>
            <td>221</td>
            <td>101</td>
          </tr>
          <tr className="even-row">
            <th scope="row">5</th>
            <td>LOC105</td>
            <td>109</td>
            <td>111</td>
          </tr>
          <tr className="odd-row">
            <th scope="row">6</th>
            <td>LOC106</td>
            <td>209</td>
            <td>191</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;
