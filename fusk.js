//   const [calculating, setCalculating] = useState(false);

const {
  vaccineCoverage,
  vaccineCoverageInCountry,
  virusHistoricalTotal,
  virusHistoricalInCountry,
  selectedCountry, // if we change it it automaticly will change fetched countries in parent component -> se we will obtain new data lists
  operationError,
} = useSelector((state) => state.virusInfo);
//   operationError show by notification

const calcChartData = useCallback(() => {
  // async
  //   setCalculating(true)
  //   TODO add workers to populate dataObject
  const resultiveChartObject = [];
  const tileLength = vaccineCoverage.length; // will be the same in all arrays
  if (selectedCountry?.code) {
    Array.from({ length: tileLength }).map((index) => {
      // /////////////////////////////////////////////////////////////////////////////////////////////
      resultiveChartObject.push();
    });
  } else {
  }
  //   setCalculating(false)
  return resultiveChartObject;
}, [
  selectedCountry,
  vaccineCoverage, // no props
  vaccineCoverageInCountry, // no props
  virusHistoricalTotal, //  cases; deaths; recovered;
  virusHistoricalInCountry, //  cases; deaths; recovered;
]);

// if(calculating) return <CircularProgress size={400} />
