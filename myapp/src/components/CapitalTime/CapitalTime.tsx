import { useEffect, useState } from 'react';
import { Country } from '../../models/CountryList.model';

type CapitalTimeProps = {
  countryData: Country;
};


const CapitalTime = ({ countryData }: CapitalTimeProps) => {
  const [ time, setTime ] = useState(new Date().toLocaleString('en', {hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric'}))

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, [])

  const tick = () => {
    setTime(new Date().toLocaleString('en', {hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric'}))
  };

  return <div>{time}</div>;
};

export default CapitalTime;
