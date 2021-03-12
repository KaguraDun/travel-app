import { useEffect, useState } from "react";
import { Country } from "../../models/CountryList.model";
import { WeatherResponse } from "../../models/Weather.model";
import { CountryService } from "../../services/http.service";

type ClickedCountryBlockProps = {
  countryInfo: Country,
}
export const ClickedCountryBlock = ({ countryInfo }: ClickedCountryBlockProps) => {
  const { name, nativeName, capital, flag, currencies } = countryInfo;
  const [ weather, setWeather ] = useState({} as WeatherResponse);

  useEffect(() => {
    CountryService.fetchWeather(capital)
      .then(response => response.json())
      .then((weather: WeatherResponse) => setWeather(weather));
  },[]);
  
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Native name: {nativeName}</li>
      <li>Capital: {capital}</li>
      <li>Flag: <img src={flag}></img></li>
      <li>{currencies.map(currency => <div>Currency: {currency.name}{currency.symbol}</div>)}</li>
    </ul>
  );
}