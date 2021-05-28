import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export const officialCountries = countries.getNames("en", {
  select: "official",
});
export const officialCountriesEntries = Object.entries(officialCountries);
