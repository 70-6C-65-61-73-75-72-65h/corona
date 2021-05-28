import { CustomWithFetchingWithError } from "./mixins";
import {
  fetchVaccineTotalOperation,
  fetchVaccineCountryOperation,
  fetchVirusHistoricalTotalOpeartion,
  fetchVirusCountryHistoricalOpeartion,
  fetchVirusTotalOnTodayOpeartion,
  fetchVirusCountryOnTodayOpeartion,
} from "./virusInfo.operations";

import { SET_SELECTED_COUNTRY } from "../constants/actionTypes";

export const fetchVaccineTotal = (
  setFetching,
  message = "Failed to get vaccine info for whole world"
) =>
  CustomWithFetchingWithError(fetchVaccineTotalOperation, {
    setFetching,
    message,
  });

export const fetchVaccineCountry = (
  countryCode,
  setFetching,
  message = `Failed to get vaccine for country with code ${countryCode}`
) =>
  CustomWithFetchingWithError(fetchVaccineCountryOperation, {
    setFetching,
    message,
    mainData: {
      countryCode,
    },
  });

export const fetchVirusHistoryTotal = (
  setFetching,
  message = `Failed to get virus history info for whole world`
) =>
  CustomWithFetchingWithError(fetchVirusHistoricalTotalOpeartion, {
    setFetching,
    message,
  });

export const fetchVirusCountryHistorical = (
  countryCode,
  setFetching,
  message = `Failed to get virus history info for country with code ${countryCode}`
) =>
  CustomWithFetchingWithError(fetchVirusCountryHistoricalOpeartion, {
    setFetching,
    message,
    mainData: {
      countryCode,
    },
  });

export const fetchVirusTotalOnToday = (
  setFetching,
  message = `Failed to get virus on today info for whole world`
) =>
  CustomWithFetchingWithError(fetchVirusTotalOnTodayOpeartion, {
    setFetching,
    message,
  });

export const fetchVirusCountryOnToday = (
  countryCode,
  setFetching,
  message = `Failed to get virus on today info for country with code ${countryCode}`
) =>
  CustomWithFetchingWithError(fetchVirusCountryOnTodayOpeartion, {
    setFetching,
    message,
    mainData: {
      countryCode,
    },
  });

// country object should have code and fullName fields
export const setSelectedCountry = (country) => ({
  type: SET_SELECTED_COUNTRY,
  payload: country,
});
