import axios from "axios";

const BASE_URL = `https://disease.sh/v3/covid-19`;

const API = axios.create({ baseURL: BASE_URL });

export const getVaccineTotal = () => API.get("/vaccine/coverage");
// export const getVaccineTotalCountries = () =>
//   API.get("/vaccine/coverage/countries");
export const getVaccineByCountryCode = (countryCode) =>
  API.get(`/vaccine/coverage/countries/${countryCode}`);

export const getVirusHistoricalTotal = () => API.get(`/historical/all`);
export const getVirusHistoricalByCountryCode = (countryCode) =>
  API.get(`/historical/${countryCode}`);

export const getVirusTotalOnToday = () => API.get(`/all`);
export const getVirusByCountryCodeOnToday = (countryCode) =>
  API.get(`/countries/${countryCode}`);
