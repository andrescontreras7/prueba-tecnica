"use client";

import Link from "next/link";
import React from "react";

const options = ['2015', '2016', '2017', '2018', '2019','2020', '2021','2022','2023','2024','2025',]

function Cars({
  vehicles,
  hanledSelectVehicle,
  hanledSelectYear,
  selectedVehicle,
  selectedYear,
}) {
  return (
    <div className="w-full flex flex-wrap p-4 gap-4 justify-center bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
      <div className="w-full md:w-1/3">
        <select
          className="w-full px-4 py-3 text-base font-light text-gray-200 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          id="cars"
          name="cars"
          onChange={hanledSelectVehicle}
        >
          <option className="font-light" value="">
            Select Car
          </option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.MakeId} value={vehicle.MakeId}>
              {vehicle.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-1/3">
        <select
          className="w-full px-4 py-3 text-base text-gray-200 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
          id="years"
          name="years"
          onChange={hanledSelectYear}
        >
          <option className="font-light" value="">
            Select Year
          </option>
          {options.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        
        </select>
      </div>
      <div className="w-1/4 flex justify-end">
        <Link
          href={
            selectedVehicle && selectedYear
              ? `/results/${selectedVehicle}/${selectedYear}`
              : "#"
          }
          className={
            selectedVehicle && selectedYear
              ? "bg-indigo-600 text-white text-center uppercase font-bold px-2 w-full py-3 rounded-md"
              : "bg-gray-500 w-full text-gray-300 text-center uppercase font-bold px-2 py-3 rounded-md cursor-not-allowed"
          }
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default Cars;