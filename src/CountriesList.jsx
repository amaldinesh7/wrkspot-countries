import React from "react";
import { Table } from "antd";
import { COUNTRY_COLUMNS } from "./constants";

const CountriesList = ({ countries, isLoadingCountries }) => {
  return (
    <Table
      columns={COUNTRY_COLUMNS}
      dataSource={countries}
      loading={isLoadingCountries}
    />
  );
};

export default CountriesList;
