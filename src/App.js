import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import LocationInfo from "./Components/LocationInfo";
import InputSearch from "./Components/InputSearch";
import ResidentList from "./Components/ResidentList";

function App() {
  const [apiInfo, setApiInfo] = useState({});
  useEffect(() => {
    const randomLocation = Math.ceil(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => {
        setApiInfo(res.data);
      })
      .catch((error) => {
        console.log("Error trying to get API data", error);
      });
  }, []);

  // console.log(apiInfo);
  return (
    <div className="App">
      
      <InputSearch setApiInfo={setApiInfo} />
      <LocationInfo
        name={apiInfo.name}
        type={apiInfo?.type}
        dimension={apiInfo.dimension}
        residents={apiInfo.residents?.length}
      />

      <ResidentList resident={apiInfo.residents} />
    </div>
  );
}

export default App;
