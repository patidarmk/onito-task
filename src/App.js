import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

require("../src/mocks");

function App() {
  const [data, setData] = useState();
  const getData = () => {
    fetch("/data")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form getData={getData} />} />
        <Route path="/display" element={<DisplayData data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
