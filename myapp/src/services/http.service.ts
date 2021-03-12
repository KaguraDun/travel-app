export const CountryService = {

  fetchAllCountries: async () => {
    const apiCountriesUrl: string = 'https://restcountries.eu/rest/v2/';
    return await fetch(apiCountriesUrl);
  },

  fetchCountryInfoByName: async (country: string = 'belarus', lang: string = 'en') => {
    const apiCountryInfoUrl: string = `https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${country}`;
    return await fetch(apiCountryInfoUrl);
  },

  fetchWeather: async (cityName: string) => {
    const apiWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '492003bfd44fb7dbe75df7d92a5e55d1';
    return await fetch(`${apiWeatherUrl}${cityName}&appid=${apiKey}&units=metric`);
  },
};
