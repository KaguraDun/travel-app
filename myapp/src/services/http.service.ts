export const CountryService = {

  fetchAllCountries: async () => {
    const apiCountriesUrl: string = 'https://restcountries.eu/rest/v2/';
    return await fetch(apiCountriesUrl);
  },

  fetchCountryInfoByName: async (country: string = 'belarus', lang: string = 'en') => {
    const apiCountryInfoUrl: string = `https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${country}`;
    return await fetch(apiCountryInfoUrl);
  },
};
