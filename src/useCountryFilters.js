const useCountryFilters = ({ countries, countrySearch, populationFilter }) => {
  let filteredCountries = countries;
  if (countrySearch) {
    filteredCountries = countries.filter(({ name }) =>
      name.toLowerCase().includes(countrySearch.trim().toLowerCase())
    );
  }
  if (populationFilter) {
    filteredCountries = filteredCountries.filter(
      ({ population }) => population < populationFilter
    );
  }

  return filteredCountries;
};

export default useCountryFilters;
