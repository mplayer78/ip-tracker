import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar";
import IPDetails from "./IPDetails";
import IPMap from "./IPMap";
import SearchBox from "./SearchBox";
import IPDetailsField from "./IPDetailsField";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({});
  console.log("ipData", ipData);
  return (
    <div className="App">
      <HeaderBar>
        <SearchBox
          setIpAddress={setIpAddress}
          placeholder="Search for any IP address or domain"
        />
      </HeaderBar>
      <IPDetails ipAddress={ipAddress} setIpData={setIpData}>
        <IPDetailsField field="IP Address" value={ipData.ip} />
        <IPDetailsField field="Location" value={ipData.location?.city} />
        <IPDetailsField
          field="Timezone"
          value={`UTC ${ipData.location?.timezone}`}
        />
        <IPDetailsField field="ISP" value={ipData.isp} />
      </IPDetails>
      {ipData.location && (
        <IPMap coords={[ipData.location?.lat, ipData.location?.lng]}></IPMap>
      )}
    </div>
  );
}

export default App;
