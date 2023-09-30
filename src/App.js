import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import SubHeader from "./SubHeader";
import CountriesList from "./CountriesList";
import { COUNTRIES_URL } from "./constants";
import useCountryFilters from "./useCountryFilters";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [populationFilter, setPopulationFilter] = useState(null);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);

  const fetchCountries = async () => {
    setIsLoadingCountries(true);
    try {
      const response = await axios.get(COUNTRIES_URL);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingCountries(false);
    }
  };

  const filteredCountries = useCountryFilters({
    countries,
    countrySearch,
    populationFilter,
  });

  return (
    <div className="px-6">
      <Header />
      <SubHeader
        fetchCountries={fetchCountries}
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
        populationFilter={populationFilter}
        setPopulationFilter={setPopulationFilter}
      />
      <CountriesList
        countries={filteredCountries}
        isLoadingCountries={isLoadingCountries}
      />
    </div>
  );
};

export default App;
