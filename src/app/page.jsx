"use client";
import Cars from "../components/cars.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const getVehicles = async () => {
    try {
      const response = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
      );
      const data = await response.json();
      setVehicles(data.Results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getVehicles();
  }, []);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  console.log(vehicles);

  const hanledSelectVehicle = (car) => {
    console.log(car.target.value);
    setSelectedVehicle(car.target.value);
  };
  const hanledSelectYear = (year) => {
    console.log(year.target.value);
    setSelectedYear(year.target.value);
  };

  return (
    <div className=" h-screen">
      <div className="text-white py-24 h-full sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-xl font-bold uppercase  text-indigo-400">
              welcome
            </h2>
            <p className="mt-2 text-4xl font-semibold text-pretty text-white sm:text-5xl lg:text-balance">
              Cars system
            </p>
            <p className="mt-6 text-lg/8 text-white">
              Select the car you want consult the information
            </p>
          </div>
          <div className="mx-auto p-2 mt-6 max-w-2xl sm:mt-20 lg:mt-6 lg:max-w-6xl">
            {loading ? (
              <div className="flex justify-center items-center">
                <p className="text-2xl font-semibold text-white">Loading...</p>
              </div>
            ) : (
              <Cars
                vehicles={vehicles}
                hanledSelectVehicle={hanledSelectVehicle}
                hanledSelectYear={hanledSelectYear}
                selectedYear={selectedYear}
                selectedVehicle={selectedVehicle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
