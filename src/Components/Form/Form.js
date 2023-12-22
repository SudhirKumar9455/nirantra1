import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import nirantaraposter from '../../utils/nirantaralogo.png';
import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";

const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column; /* Change the direction on smaller screens */
  
  @media (min-width: 900px) {
    flex-direction: row; /* Revert to the original direction on larger screens */
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NirantaraContainer = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = (e) => {
    if(!isNaN(mobileNumber) && !isNaN(otp)){
    e.preventDefault();
    console.log("Logging in with:", { mobileNumber, otp });
    axios
      .post("your-api-endpoint", { mobileNumber, otp })
      .then((response) => {
        console.log("Login successful:", response.data);
        // Add your logic for successful login
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Add your logic for failed login
        alert("Data Saved!");
      });
    }else{
        alert("Only Numbers are allowed as input")
    }
  };

  return (
    
    <LoginPageContainer>
    <NirantaraContainer style={{ backgroundColor: "#DFEDD1" }}>
        {/* Add your Nirantara poster here */}
        <img
          src={nirantaraposter}
          style={{ height: "70px", width: "200px" }}
          alt="Nirantara Poster"
        />
      </NirantaraContainer>
      
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <h2 style={{ marginTop: "5%" }}>Account Login</h2>
          <h6 style={{ color: "#696F79" }}>
            Login with your registered mobile number
          </h6>
          <label
            htmlFor="mobileNumber"
            style={{ color: "#696F79", marginTop: "7%" }}
          >
            Mobile Number
          </label>
          <br />
          <input
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              width: "100%",
              boxSizing: "border-box",
            }}
            type="tel"
            id="mobileNumber"
            placeholder="Enter Your Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <br />
          <label htmlFor="otp" style={{ color: "#696F79" }}>
            OTP
          </label>
          <br />
          <input
            style={{
              marginTop: "10px",
              marginBottom: "60px",
              width: "100%",
              boxSizing: "border-box",
            }}
            type="text"
            placeholder="Enter the OTP"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <br />
          <Link to={'/Dashboard'}>
          <button
          
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5%",
            }}
          >
            Login
          </button>
          </Link>
        </LoginForm>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
