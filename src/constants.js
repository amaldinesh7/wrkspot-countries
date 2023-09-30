export const COUNTRY_COLUMNS = [
  { title: "Country Name", dataIndex: "name", key: "name", width: "25%" },
  {
    title: "Code",
    dataIndex: "abbreviation",
    key: "abbreviation",
    width: "5%",
  },
  {
    title: "Capital",
    dataIndex: "capital",
    key: "capital",
    width: "25%",
    render: (value) => {
      return value ? value : "-";
    },
  },
  {
    title: "Ph Code",
    dataIndex: "phone",
    key: "phone",
    width: "10%",
    render: (value) => {
      return value ? value : "-";
    },
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
    width: "15%",
    render: (value) => {
      return value ? value : "-";
    },
  },
  {
    title: "Flag",
    dataIndex: "flag",
    key: "flag",
    align: "center",
    render: (_, data) => {
      return (
        <img alt={`${data.name}'s Flag`} src={data.media.flag} height={20} />
      );
    },
    width: "10%",
  },
  {
    title: "Emblem",
    dataIndex: "emblem",
    key: "emblem",
    align: "center",
    render: (_, data) => {
      return (
        <img
          alt={`${data.name}'s Emblem`}
          src={data.media.emblem}
          height={20}
        />
      );
    },
    width: "10%",
  },
];

export const POPULATION_FILTER_OPTIONS = [
  { value: 1000000, label: "< 1 M" },
  { value: 5000000, label: "< 5 M" },
  { value: 10000000, label: "< 10 M" },
];

export const COUNTRIES_URL =
  "https://mocki.io/v1/ec42d07b-99b4-4d9b-b678-4643ef8baad8";
