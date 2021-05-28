import {
  FETCH_VACCINE_TOTAL,
  FETCH_VACCINE_COUNTRY,
  FETCH_VIRUS_HISTORY_TOTAL,
  FETCH_VIRUS_COUNTRY_HISTORY,
  FETCH_VIRUS_TOTAL_TODAY,
  FETCH_VIRUS_COUNTRY_TODAY,
} from "../constants/actionTypes";

import { setOperationError } from "./mixins";

import checkIfEmptyObject from "../../utils/checkIfEmptyObject";

import * as api from "../../service/api";
import { virusHistoryFields } from "../../constants/commonFetchFields";
// import { createDataFromArray } from "../../utils/chartUtils";

// import {
//   vaccine,
//   vaccineInCountry,
//   virus,
//   virusInCountry,
// } from "../../constants/virusInfo";

export const fetchVaccineTotalOperation = async (
  { errorMessage },
  dispatch
) => {
  let { data } = await api.getVaccineTotal();
  if (data && !checkIfEmptyObject(data)) {
    // console.log(data);
    dispatch({
      type: FETCH_VACCINE_TOTAL,
      payload: Object.entries(data),
    });
  } else {
    dispatch(setOperationError(`${errorMessage} : fetchVaccineTotalOperation`));
  }
};

export const fetchVaccineCountryOperation = async (
  { errorMessage, countryCode },
  dispatch
) => {
  let { data } = await api.getVaccineByCountryCode(countryCode);
  if (data && "timeline" in data && !checkIfEmptyObject(data.timeline)) {
    dispatch({
      type: FETCH_VACCINE_COUNTRY,
      payload: Object.entries(data.timeline),
    });
  } else {
    dispatch(
      setOperationError(`${errorMessage} : fetchVaccineCountryOperation`)
    );
  }
};

export const fetchVirusHistoricalTotalOpeartion = async (
  { errorMessage },
  dispatch
) => {
  let { data } = await api.getVirusHistoricalTotal();
  if (
    data &&
    virusHistoryFields.every(
      (field) => field in data && !checkIfEmptyObject(data[field])
    )
  ) {
    dispatch({
      type: FETCH_VIRUS_HISTORY_TOTAL,
      payload: virusHistoryFields.reduce(
        (acum, field) => ((acum[field] = Object.entries(data[field])), acum),
        {}
      ),
    });
  } else {
    dispatch(
      setOperationError(`${errorMessage} : fetchVirusHistoricalTotalOpeartion`)
    );
  }
};

export const fetchVirusCountryHistoricalOpeartion = async (
  { errorMessage, countryCode },
  dispatch
) => {
  let { data } = await api.getVirusHistoricalByCountryCode(countryCode);
  let history = data?.timeline;
  if (
    data &&
    history &&
    virusHistoryFields.every(
      (field) => field in history && !checkIfEmptyObject(history[field])
    )
  ) {
    dispatch({
      type: FETCH_VIRUS_COUNTRY_HISTORY,
      payload: virusHistoryFields.reduce((acum, field) => {
        acum[field] = Object.entries(history[field]);
        return acum;
      }, {}),
    });
  } else {
    dispatch(
      setOperationError(
        `${errorMessage} : fetchVirusCountryHistoricalOpeartion`
      )
    );
  }
};

export const fetchVirusTotalOnTodayOpeartion = async (
  { errorMessage },
  dispatch
) => {
  let { data } = await api.getVirusTotalOnToday();
  // cant normally check all fields so just check if object dont empty
  if (data && !checkIfEmptyObject(data)) {
    dispatch({
      type: FETCH_VIRUS_TOTAL_TODAY,
      payload: data,
    });
  } else {
    dispatch(
      setOperationError(`${errorMessage} : fetchVirusTotalOnTodayOpeartion`)
    );
  }
};

export const fetchVirusCountryOnTodayOpeartion = async (
  { errorMessage, countryCode },
  dispatch
) => {
  let { data } = await api.getVirusByCountryCodeOnToday(countryCode);
  // cant normally check all fields so just check if object dont empty
  if (data && !checkIfEmptyObject(data)) {
    dispatch({
      type: FETCH_VIRUS_COUNTRY_TODAY,
      payload: data,
    });
  } else {
    dispatch(
      setOperationError(`${errorMessage} : fetchVirusCountryOnTodayOpeartion`)
    );
  }
};
