import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationMasterForm = () => {
  // const history = useHistory(); // Initialize history
  const [locationId, setLocationId] = useState("");
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      setAddress(selectedAddress);

      const additionalInfo = extractAdditionalInfo(results[0]);

      setCoordinates({
        latitude: latLng.lat,
        longitude: latLng.lng,
      });

      setLocationName(additionalInfo.locationName);
      setLocationId(additionalInfo.locationId);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const extractAdditionalInfo = (geocodingResult) => {
    const locationName =
      geocodingResult?.address_components
        ?.filter((component) => component.types.includes("route"))
        .map((component) => component.long_name)
        .join(" ") || "";

    const locationId = generateLocationId(locationName);
    return {
      locationName,
      locationId,
    };
  };

  const generateLocationId = (name) => {
    const sequentialNumber = Math.floor(Math.random() * 900) + 101;
    return `LOC${sequentialNumber}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission, e.g., send data to the server
    console.log("Location ID:", locationId);
    console.log("Location Name:", locationName);
    console.log("Address:", address);
    console.log("Latitude:", coordinates.latitude);
    console.log("Longitude:", coordinates.longitude);

    // Display alert
    alert("Data Saved");

    // Reset form data
    setLocationId("");
    setLocationName("");
    setAddress("");
    setCoordinates({
      latitude: "",
      longitude: "",
    });

    // Redirect to the dashboard page
    window.history.back();
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "70%" }}>
          <Header />
          <div></div>
          <div>
            <h2 style={{fontWeight:'600', fontSize:'30px', height:'38px', color:"#4B465C"}}>Location Master</h2>
            <div
              style={{
                padding: "20px 30px 20px 30px",
                borderRadius: "10px",
                width: "650px",
                margin: 'none',
                height: "309px",
                marginTop: "50px",
                backgroundColor: "white",
              }}
            >
              <form onSubmit={handleSubmit}>
                
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      
                      width: "100%",
                      marginTop: "5%",
                      marginBottom: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: 'column',
                        
                      }}
                    >
                      <label htmlFor="locationId">Location ID</label>
                      <input
                        type="text"
                        placeholder="Location Master"
                        id="locationId"
                        value={locationId}
                        onChange={(e) => setLocationId(e.target.value)}
                        required
                      />
                    </div>
                    <div
                      className="Addressbutton"
                      style={{ marginBottom: "10px", display:'flex', flexDirection:'column' }}
                    >
                      <label htmlFor="address">Location Name</label>
                      <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading,
                        }) => (
                          <div>
                            <input
                              {...getInputProps({
                                placeholder: "Enter your address",
                                className: "location-search-input",
                              })}
                              required
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map((suggestion) => {
                                const style = {
                                  backgroundColor: suggestion.active
                                    ? "#41b6e6"
                                    : "#fff",
                                };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      style,
                                    })}
                                  >
                                    {suggestion.description}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ marginBottom: "10px", display:'flex', flexDirection:'column' }}>
                      <label htmlFor="latitude">Latitude</label>
                      <input
                        type="text"
                        id="latitude"
                        value={coordinates.latitude}
                        placeholder="Latitude"
                        readOnly
                      />
                    </div>
                    <div style={{ marginBottom: "10px" , display:'flex', flexDirection:'column'}}>
                      <label htmlFor="longitude">Longitude</label>
                      <input
                        type="text"
                        id="longitude"
                        value={coordinates.longitude}
                        placeholder="Longitude"
                        readOnly
                      />
                    </div>
                  </div>

                  <div style={{ textAlign: "center"}}>
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        width: "280px",
                        padding:'7px 45px 7px 45px',
                        height:'53px',
                        borderRadius: "5px",
                        textAlign: "center",
                        marginTop:'5%'
                      }}
                      type="submit"
                    >
                      <h5><b>Submit</b></h5>
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMasterForm;
