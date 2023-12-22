import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"; // Assuming the correct path to your Sidebar component
import VehicleMasterTable from "./VehicleMasterTable";
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
  
  const headerstyle={
    width:'100%'
  };
  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>

      <div style={tableStyle}>
        <div style={headerstyle}>
          <Header />
        </div>
        <VehicleMasterTable />
      </div>
    </div>
  );
};

export default LocationMaster;
