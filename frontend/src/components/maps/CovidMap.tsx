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
  updated: number;
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    _id: number | null;
    iso2: string | null;
    iso3: string | null;
    lat: number;
    long: number;
    flag: string;
  };
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

const CovidMap: React.FC = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CountryData[]>(
          "https://disease.sh/v3/covid-19/countries"
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
        {Array.isArray(countriesData) ? (
          countriesData.map((country: CountryData, i) => (
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
          ))
        ) : (
          <p>No data available</p>
        )}
        <ZoomControl position="topleft" />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
