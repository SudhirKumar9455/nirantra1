import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"; // Assuming the correct path to your Sidebar component
import LocationTable from "./LocationTable";
import Header from "../../Components/Header/Header";

const LocationMaster = () => {
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const tableStyle = {
    width: "70%",
  };

  const Headerstyle={
    width:"100%",
  }
  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={tableStyle}>
        <Header/>
        <LocationTable />
      </div>
    </div>
  );
};

export default LocationMaster;
