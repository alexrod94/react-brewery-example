import { useState } from "react";
import Brewery from "./components/Brewery";

export default function App() {
  const [breweries, setBreweries] = useState(null);

  const getBreweries = async () => {
    const res = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const finalRes = await res.json();
    setBreweries(finalRes);
  };

  if (!breweries) {
    return (
      <>
        <h1 className="text-2xl mb-3">No data found</h1>
        <button
          className="bg-black p-3 text-white"
          onClick={() => getBreweries()}
        >
          Get Breweries
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1>List of Breweries</h1>
        <div className="grid grid-cols-3 gap-3">
          {breweries.map((brewery) => {
            return (
              <Brewery
                name={brewery.name}
                type={brewery.brewery_type}
                address={brewery.address_1}
                key={brewery.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
