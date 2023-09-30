import React from "react";
import { Input, Button, Select } from "antd";
import { POPULATION_FILTER_OPTIONS } from "./constants";

const SubHeader = ({
  fetchCountries,
  countrySearch,
  setCountrySearch,
  populationFilter,
  setPopulationFilter,
}) => {
  const handleCountrySearchInput = (e) => {
    setCountrySearch(e.target.value);
  };

  const handlePopulationFilterChange = (value) => {
    setPopulationFilter(value);
  };

  const handleFilterClear = () => {
    setPopulationFilter(null);
  };
  return (
    <div className="flex justify-between pb-4 pt-1">
      <div className="flex gap-4">
        <Input
          placeholder="Country name"
          value={countrySearch}
          onChange={handleCountrySearchInput}
          style={{ width: 200 }}
        />
        <Select
          placeholder="Population"
          style={{ width: 120 }}
          onChange={handlePopulationFilterChange}
          options={POPULATION_FILTER_OPTIONS}
          value={populationFilter}
        />
        <Button type="text" onClick={handleFilterClear}>
          Clear
        </Button>
      </div>

      <Button type="primary" onClick={fetchCountries}>
        Show all Countries
      </Button>
    </div>
  );
};

export default SubHeader;
