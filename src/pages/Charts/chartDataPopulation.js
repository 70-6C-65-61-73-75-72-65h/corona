import * as Comlink from "comlink";

// chartDataPopulate
export const chartData = {
  populate: ({
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
  }) => {
    let start = +new Date();
    let res = [];
    let arrayLen = vaccineCoverage.length || vaccineCoverageInCountry.length;
    for (let index = 0; index < arrayLen; index++) {
      res.push({
        [time]: (selectedCountry?.code
          ? vaccineCoverageInCountry
          : vaccineCoverage)[index][0],
        [vaccine]: (selectedCountry?.code
          ? vaccineCoverageInCountry
          : vaccineCoverage)[index][1],
        [cases]: (selectedCountry?.code
          ? virusHistoricalInCountry
          : virusHistoricalTotal)[cases][index][1],
        [recovered]: (selectedCountry?.code
          ? virusHistoricalInCountry
          : virusHistoricalTotal)[recovered][index][1],
        [deaths]: (selectedCountry?.code
          ? virusHistoricalInCountry
          : virusHistoricalTotal)[deaths][index][1],
      });
    }
    return { res, time: `${+new Date() - start} ms` };
  },
  // Array.from({
  //   length: vaccineCoverage.length || vaccineCoverageInCountry.length, // vaccineCoverage could be 0
  // }).map((_, index) => {
  //   return {
  //     [time]: (selectedCountry?.code
  //       ? vaccineCoverageInCountry
  //       : vaccineCoverage)[index][0],
  //     [vaccine]: (selectedCountry?.code
  //       ? vaccineCoverageInCountry
  //       : vaccineCoverage)[index][1],
  //     [cases]: (selectedCountry?.code
  //       ? virusHistoricalInCountry
  //       : virusHistoricalTotal)[cases][index][1],
  //     [recovered]: (selectedCountry?.code
  //       ? virusHistoricalInCountry
  //       : virusHistoricalTotal)[recovered][index][1],
  //     [deaths]: (selectedCountry?.code
  //       ? virusHistoricalInCountry
  //       : virusHistoricalTotal)[deaths][index][1],
  //   };
  // }),
};
Comlink.expose(chartData);

// onmessage = (e) => {
//   const startTime = new Date().getTime();
//   console.log("here");
//   const chartCalc = chartDataPopulate(e.data);
//   postMessage({
//     chartCalc,
//     timeCalc: new Date().getTime() - startTime,
//   });
// };

// {
//   test: /\.worker\.js$/,
//   use: {
//     loader: 'worker-loader',
//     options: {
//       inline: true
//     }
//   }
// },
