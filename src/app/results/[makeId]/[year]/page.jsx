import Link from "next/link";
import Models from "../../../../components/modelos";


async function getVehicleMakes() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
  const data = await res.json();
  return data.Results.map((make) => make.MakeId);
}



export async function generateStaticParams() {
  

  const makes = await getVehicleMakes();
  const years = [  "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  return makes.flatMap((makeId) =>
    years.map((year) => ({ makeId: makeId.toString(), year }))
  );
}
async function getVehicleModels(makeId, year) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  return data.Results;
}

  export default async function CarPage({ params }) {
    const data = await getVehicleModels(params.makeId, params.year);


    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="h-full border border-gray-700 rounded-lg p-6">
        <Link href="/" className="text-white  text-lg mb-4 block"> 
          Back
        </Link>
        
        <h1 className="text-3xl uppercase font-bold mb-4">Models</h1>
       
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((model,index) => (
              <Models key={index} Model_Name={model.Model_Name} Model_ID={model.Model_ID} />
            ))}
          </div>
        ) : (
          <p className="text-white text-center text-xl">No models found :( </p>
        )}
      </div>
    </div>
    );
  }
  