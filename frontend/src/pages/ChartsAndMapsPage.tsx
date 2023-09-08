import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { LineChart } from "../components/charts/LineChart";

function ChartsAndMapsPage() {
  const [apiData, setApiData] = useState(null);
  const apiEndpoint: string = process.env.REACT_APP_COVID_API_ENDPOINT || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const apiData = response.data;

        setApiData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className="md:px-[50px] mt-[30px]">
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 max-w-[900px] max-[1023px]:max-w-[652px] mx-auto">
          <header className="flex items-center gap-x-3 overflow-hidden px-6 py-4">
            <div className="grid flex-1 gap-y-1">
              <h3 className="text-base font-semibold leading-6 text-gray-950">
                Cases Fluctuation Over Time
              </h3>
            </div>
          </header>

          <div className="border-t border-gray-200">
            <div className="p-6">
              <div className="chart">
                {apiData && <LineChart data={apiData} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ChartsAndMapsPage;
