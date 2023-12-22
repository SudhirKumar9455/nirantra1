import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const VehicleForm = () => {
  // const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const [vehicleData, setVehicleData] = useState({
    col1: "",
    col2: "",
    col3: "HCV",
    col4: "",
    col5: "",
    col6: currentYear,
    col7: "",
    col8: "",
    col9: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission, e.g., send data to the server
    console.log("Form Data:", vehicleData);

    // Display alert
    alert("Data Saved");

    // Reset form data to null
    setVehicleData({
      col1: "",
      col2: "",
      col3: "HCV",
      col4: "",
      col5: "",
      col6: currentYear,
      col7: "",
      col8: "",
      col9: "",
    });

    // Redirect to the dashboard page
    window.history.back();
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "70%", padding: "10px", marginLeft: "3%" }}>
        <Header />
        <Container component="main" maxWidth="100%">
          <Typography component="h1" variant="h5">
            Vehicle Information Form
          </Typography>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "10px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <label htmlFor="col1">Vehicle ID</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col1"
                    name="col1"
                    placeholder="1122"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col2">Vehicle Number</label>
                  <TextField
                    variant="outlined"
                    placeholder="2244"
                    fullWidth
                    id="col2"
                    name="col2"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Vehicle Type</label>
                    <Select label="Type" fullWidth id="col3" name="col3">
                      <MenuItem value="HCV">HCV</MenuItem>
                      <MenuItem value="LCV">LCV</MenuItem>
                      <MenuItem value="MCV">MCV</MenuItem>
                      <MenuItem value="SCV">SCV</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col4">Make</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="102"
                    id="col4"
                    name="col4"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col5">Model</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="col5"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Year</label>
                    <Select placeholder="Year" label="Year" fullWidth id="col6" name="col6">
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  LAST SERVICE
                  {/* <TextField
                    variant="outlined"
                    fullWidth
                    id="col7"
                    name="col7"
                    placeholder="DD-MM-YYYY"
                  /> */}
                  <DatePicker
                    selected={selectedDate1}
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    dateFormat="dd-MM-yyyy"
                    customInput={
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="col7"
                        name="col7"
                        placeholder="DD-MM-YYYY"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col8">Fuel Type</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col8"
                    name="col8"
                    placeholder="2244"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>PUE DATE</Typography>
                  {/* <TextField
                    variant="outlined"
                    fullWidth
                    id="col7"
                    name="col7"
                    placeholder="DD-MM-YYYY"
                  /> */}
                  <DatePicker
                    selected={selectedDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd-MM-yyyy"
                    
                    customInput={
                      <TextField
                        variant="outlined"
                        
                        fullWidth
                        id="col7"
                        name="col7"
                        placeholder="DD-MM-YYYY"
                      />
                    }
                  />
                  </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Fuel Effeciency km/lit</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1210"
                    id="col9"
                    name="col9"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Load Capacity(ton)</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1021"
                    id="col9"
                    name="col9"
                  />
                </Grid>
              </Grid>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "280px",
                    padding: "7px 45px 7px 45px",
                    height: "40px",
                    borderRadius: "5px",
                    textAlign: "center",
                    marginTop: "5%",
                  }}
                  onClick={handleSubmit} // Use onClick instead of type="submit"
                >
                  <Typography variant="h5">
                    Submit
                  </Typography>
                </Button>
              </div>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default VehicleForm;
