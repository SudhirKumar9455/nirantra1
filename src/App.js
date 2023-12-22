import Index from "./Route/Index";
import "./App.css";
// import { Axios } from "axios";
// import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState("");
  // const getData = async () => {
  //   const response = await Axios.get("https://localhost:5000/getData");
  //   setData(response.data);
  // };
  // useEffect(()=>{
  //   getData()
  // },[]);
  return (
    <div>
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <Index />
      </div>
      {/* <div>{data}</div> */}
    </div>
  );
}

export default App;
