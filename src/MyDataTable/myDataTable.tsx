import React from "react";
import DataTable from "react-data-table-component";
import { continent } from "./continent";

// Define the data structure
interface ContinentData {
  name: string;
  countries: CountryData[];
}

interface CountryData {
  name: string;
  capital: string;
  population: string;
  gdp: string;
  area: string;
}

function transformedData(_data: any) {
  const transformedCountries: any[] = [];

  continent.forEach((continent: ContinentData) => {
    const continentName = continent.name;

    continent.countries.forEach((country: CountryData) => {
      const { name: countryName, capital, population, gdp, area } = country;
      transformedCountries.push({
        continentName,
        countryName,
        capital,
        population,
        gdp,
        area,
      });
    });
  });

  return transformedCountries;
}

console.log(transformedData(continent));
// Sample data
const data: ContinentData[] = transformedData(continent);
console.log(data);

// Define the columns for the table
const columns = [
  {
    name: "Continent",
    selector: (row: any) => row.continentName,
    sortable: true,
  },
  {
    name: "Country",
    selector: (row: any) => row.countryName,
    sortable: true,
  },
  {
    name: "Capital",
    selector: (row: any) => row.capital,
    sortable: true,
  },
  {
    name: "Population",
    selector: (row: any) => row.population,
    sortable: true,
  },
  {
    name: "GDP",
    selector: (row: any) => row.gdp,
    sortable: true,
  },
  {
    name: "Area",
    selector: (row: any) => row.area,
    sortable: true,
  },
];

const MyDataTable: React.FC = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MyDataTable;
