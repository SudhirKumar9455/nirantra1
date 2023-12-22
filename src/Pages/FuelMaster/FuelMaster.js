import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"; // Assuming the correct path to your Table component
import FuelTable from "./FuelTable";
import Header from "../../Components/Header/Header";

const FuelMaster = () => {
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const tableStyle = {
    width: "70%",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={tableStyle}>
        <Header />
        <FuelTable />
      </div>
    </div>
  );
};

export default FuelMaster;
