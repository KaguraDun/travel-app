import { WeatherInfo } from '../../../models/Weather.model'

type WeatherInfoProps = {
  weather: WeatherInfo;
}

export const WeatherData = ({ weather }: WeatherInfoProps) => {
  return (
    <div>
      <div>Current temperature: {weather.main.temp}</div>
      <div>{weather.weather[0].description}</div>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
    </div>
  );
};