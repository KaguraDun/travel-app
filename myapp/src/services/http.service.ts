import { Country } from '../models/TravelApp.models';

export const CountryService = {

  fetchAllCountries: async () => {
    const apiCountriesUrl: string = 'https://restcountries.eu/rest/v2/';
    return await fetch(apiCountriesUrl);
  },

  getRandomCountry: (countryList: Country[]): Country => {
    const randomIndex = Math.round((countryList.length - 1) * Math.random());
    return countryList[randomIndex];
  }

  // getCountryByName: (countryList: Country[]): Country => {

  //   return ;
  // }


};
