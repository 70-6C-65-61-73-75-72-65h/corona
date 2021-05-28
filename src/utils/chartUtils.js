// Generate Stats Data
export const createData = (key) => (time, amount) => {
  return { time, [key]: amount };
};

export function createDataFromArray(arrayData, key) {
  return arrayData.map((item) => createData(key)(...item));
}
