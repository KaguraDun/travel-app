import { useEffect, useState } from "react";
import { WeatherInfo } from "../../models/Weather.model";
import { CountryService } from "../../services/http.service";
import { WeatherData } from "./WeatherData/WeatherData";

type WeatherProps = {
  capital: string;
}

const Weather = ({ capital }: WeatherProps) => {
  const [ weather, setWeather ] = useState(null);
  
  useEffect(() => {
    CountryService.fetchWeather(capital)
      .then(response => response.json())
      .then((weatherInfo: WeatherInfo) => setWeather(weatherInfo)
    );
  }, []);

  return (
    <div>
      {weather ? <WeatherData weather={weather} /> : null}
    </div>
  );
};

export default Weather;
