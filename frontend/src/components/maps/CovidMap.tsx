import React, { useEffect, useState } from "react";
import locateIcon from "../../assets/images/pin.png";
import { Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import axios from "axios";

interface CountryData {
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
}

const CovidMap: React.FC = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CountryData[]>(
          `${process.env.REACT_APP_COVID_API_ENDPOINT}/countries`
        );
        const data = response.data;
        setCountriesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mapCenter: [number, number] = [20, 0];
  const mapZoom: number = 3;

  const customIcon = new Icon({
    iconUrl: locateIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="map-container w-full md:h-[400px] h-[300px]">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countriesData.map((country: CountryData, i) => (
          <Marker
            key={i}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <ZoomControl position="topleft" />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
