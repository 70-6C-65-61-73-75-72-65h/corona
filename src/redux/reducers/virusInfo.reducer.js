import {
  FETCH_VACCINE_TOTAL,
  FETCH_VACCINE_COUNTRY,
  FETCH_VIRUS_HISTORY_TOTAL,
  FETCH_VIRUS_COUNTRY_HISTORY,
  FETCH_VIRUS_TOTAL_TODAY,
  FETCH_VIRUS_COUNTRY_TODAY,
  SET_SELECTED_COUNTRY,
  SET_OPERATION_ERROR,
} from "../constants/actionTypes";
import { virusState } from "../../constants/commonFetchFields";

const initialState = {
  vaccineCoverage: null, // just obj of numbers of people vaccinated
  vaccineCoverageInCountry: null, // just obj of numbers of people vaccinated
  selectedCountry: {
    code: null,
    fullName: null,
  },
  // virus total
  virusTotal: null, // there is not only 3 props in total field ( non-historical)
  virusTotalInCountry: null, // -- \\ --
  // virus historical
  virusHistoricalTotal: { ...virusState },
  virusHistoricalInCountry: { ...virusState },
  // opeartionError
  opeartionError: "",
};

export default function virusInfoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VACCINE_TOTAL: {
      return { ...state, vaccineCoverage: action.payload };
    }
    case FETCH_VACCINE_COUNTRY: {
      return { ...state, vaccineCoverageInCountry: action.payload };
    }
    case FETCH_VIRUS_HISTORY_TOTAL: {
      return {
        ...state,
        virusHistoricalTotal: {
          ...state.virusHistoricalTotal,
          ...action.payload,
        },
      };
    }
    case FETCH_VIRUS_COUNTRY_HISTORY: {
      return {
        ...state,
        virusHistoricalInCountry: {
          ...state.virusHistoricalInCountry,
          ...action.payload,
        },
      };
    }
    case FETCH_VIRUS_TOTAL_TODAY: {
      return { ...state, virusTotal: action.payload };
    }
    case FETCH_VIRUS_COUNTRY_TODAY: {
      return { ...state, virusTotalInCountry: action.payload };
    }
    case SET_SELECTED_COUNTRY: {
      return {
        ...state,
        selectedCountry: {
          code: action.payload.code,
          fullName: action.payload.fullName,
        },
      };
    }
    case SET_OPERATION_ERROR: {
      return { ...state, opeartionError: action.error };
    }
    default: {
      return { ...state };
    }
  }
}
