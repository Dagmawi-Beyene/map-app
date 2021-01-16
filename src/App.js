import React from "react";
import './App.css';
import Table from "./Table"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const comonscol = [
  { title: "Street", field: "street" },
  { title: "StreetName", field: "streetName" },
  { title: "Building Number", field: "buildingNumber" },
  { title: "City", field: "city" },
  { title: "Zipcode", field: "zipcode" },
  { title: "Country", field: "country" },
  { title: "County", field: "county_code" }
  
];
function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("https://fakerapi.it/api/v1/addresses?_quantity=50")
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(err => console.log(err.message))
  }, [])
  
  
  
  return (
    <div>
    <MapContainer className= "map" center={[0, 0]} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map(data => 
          <Marker 
          position = {[data.latitude, data.longitude]}>
          <Popup>
                <span> Street name: {data.streetName}</span>
          </Popup>
          </Marker>
      )};
      </MapContainer>
      <Table col={comonscol} data={data} />
      
      </div>
  );
}

export default App;
