import {
  Container,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormControl,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { officialCountries } from "../../constants/countries";
import {
  fetchVaccineCountry,
  fetchVaccineTotal,
  fetchVirusCountryHistorical,
  fetchVirusHistoryTotal,
} from "../../redux/actions/virusInfo.actions";

import Chart from "../../components/Chart/Chart";

// import { virusHistoryFields } from "../../constants/commonFetchFields";

// import { createDataFromArray } from "../../utils/chartUtils";

import {
  vaccine,
  cases,
  deaths,
  recovered,
  time,
} from "../../constants/virusInfo"; // keys to Lines

import ChartNavigation from "../../components/Chart/ChartNavigation";
import useStyles from "./styles";

import * as Comlink from "comlink";
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from "worker-loader!./chartDataPopulation";
// import worker from "workerize-loader!./chartDataPopulation";
// const workerInstance = worker();

// // Attach an event listener to receive calculations from your worker
// workerInstance.addEventListener('message', (message) => {
//   console.log('New Message: ', message.data)
// })
// // Run your calculations
// workerInstance.calculatePrimes(500, 1000000000)

async function calcHardData(args) {
  const worker = new Worker();
  const obj = Comlink.wrap(worker);
  const { res, time: timeOperation } = await obj.populate(args);
  console.log(res);
  console.log(timeOperation);
  worker.terminate();
  return res;
}

// const UA = "UA";
const initialChartState = {
  [vaccine]: false,
  [cases]: false,
  [deaths]: false,
  [recovered]: false,
};

export default function Charts() {
  const classes = useStyles();

  const [chartData, setChartData] = useState([]);

  const [fetchingVaccine, setFetchingVaccine] = useState(true); // we load data first -> then show chart
  const [fetchingVirus, setFetchingVirus] = useState(true);

  const dispatch = useDispatch();
  const [lineKeys, setLineKeys] = useState(initialChartState);

  const toogleChartKey = ({ target }) =>
    setLineKeys((keys) => ({ ...keys, [target.name]: target.checked }));

  const {
    vaccineCoverage,
    vaccineCoverageInCountry,
    virusHistoricalTotal,
    virusHistoricalInCountry,
    selectedCountry, // if we change it it automaticly will change fetched countries in parent component -> se we will obtain new data lists
    opeartionError,
  } = useSelector((state) => state.virusInfo); // after each render selector get new objects
  //   opeartionError show by notification

  // const chartDataCalc =
  useEffect(() => {
    const calc = async () => {
      // console.log("debugger");
      // debugger;
      if (
        (!(vaccineCoverage && virusHistoricalTotal.cases) &&
          !(vaccineCoverageInCountry && virusHistoricalInCountry.cases)) ||
        (selectedCountry?.code &&
          !(vaccineCoverageInCountry && virusHistoricalInCountry.cases))
      ) {
        if (chartData !== []) setChartData([]); // to prevent unusefull reRender
      } else {
        // replace ????????????????????????????????????????????????????????????????
        // const worker = new window.Worker("./chartDataPopulation.js");
        // worker.postMessage({
        //   vaccineCoverage,
        //   vaccineCoverageInCountry,
        //   selectedCountry,
        //   virusHistoricalInCountry,
        //   virusHistoricalTotal,
        //   time,
        //   vaccine,
        //   cases,
        //   recovered,
        //   deaths,
        // });
        // worker.onerror = (err) => err;
        // worker.onmessage = (e) => {
        //   console.log(e.data?.timeCalc);
        //   console.log(e.data?.chartCalc);
        //   setChartData(e.data?.chartCalc);
        //   worker.terminate();
        // };
        // const instance = worker();
        // const result = await instance.chartDataPopulate({
        //   vaccineCoverage,
        //   vaccineCoverageInCountry,
        //   selectedCountry,
        //   virusHistoricalInCountry,
        //   virusHistoricalTotal,
        //   time,
        //   vaccine,
        //   cases,
        //   recovered,
        //   deaths,
        // });
        // // console.log(result);
        // setChartData(result);
        const res = await calcHardData({
          vaccineCoverage,
          vaccineCoverageInCountry,
          selectedCountry,
          virusHistoricalInCountry,
          virusHistoricalTotal,
          time,
          vaccine,
          cases,
          recovered,
          deaths,
        });
        setChartData(res);
      }
    };
    calc();
  }, [
    // chartData,
    selectedCountry, // each time selected country changed -> run this reCalc
    vaccineCoverage, // no props
    vaccineCoverageInCountry, // no props
    virusHistoricalTotal, //  cases; deaths; recovered;
    virusHistoricalInCountry, //  cases; deaths; recovered;])
  ]);

  useEffect(() => {
    // we will fetch country data as user check country (if not -> firstly load total data)
    // debugger;
    const countryCode = selectedCountry?.code;
    console.log("runs");
    if (countryCode) {
      dispatch(fetchVaccineCountry(countryCode, setFetchingVaccine));
      dispatch(fetchVirusCountryHistorical(countryCode, setFetchingVirus));
    } else {
      dispatch(fetchVaccineTotal(setFetchingVaccine));
      dispatch(fetchVirusHistoryTotal(setFetchingVirus));
    }
  }, [selectedCountry, dispatch]);

  if (opeartionError)
    console.log(`\n\nERROR!!!!\n\nopeartionError\n: ${opeartionError}`);

  // if (fetchingVaccine || fetchingVirus) return <CircularProgress size={400} />;

  return (
    <Container
      component="main"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // border: "1px solid red",
      }}
    >
      <div>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Coronavirus
        </Typography>
      </div>
      <div className={classes.chartContainer}>
        {fetchingVaccine || fetchingVirus ? (
          <div className={`${classes.chartWrapper} ${classes.chartFetching}`}>
            <CircularProgress size={400} />
          </div>
        ) : (
          // <div>СКот</div>
          <Chart
            wrapperClass={classes.chartWrapper}
            chartData={chartData}
            lineKeys={lineKeys}
          />
        )}
        <ChartNavigation
          toogleChartKey={toogleChartKey}
          lineKeys={lineKeys}
          selectedCountry={selectedCountry}
        />
      </div>
    </Container>
  );
}
