import { WeatherInfo } from "../../models/Weather.model";

type WeatherProps = {
  weather: WeatherInfo;
}

const Weather = ({ weather }: WeatherProps) => {
  return <div>{weather.main.temp}</div>;
};

export default Weather;
