import { useEffect, useState } from 'react';

import * as cityTimezones from 'city-timezones';

import { Country } from '../../models/CountryList.model';

type CapitalTimeProps = {
  countryData: Country;
};

const CapitalTime = ({ countryData }: CapitalTimeProps) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const cityLookup = cityTimezones.lookupViaCity(countryData.capital);

    const dateProperties: Intl.DateTimeFormatOptions = {
      timeZone: cityLookup[0].timezone,
      hour: 'numeric',
      hour12: false,
      minute: 'numeric',
      second: 'numeric',
    };

    setInterval(() => {
      setTime(new Date().toLocaleString('en', dateProperties));
    }, 1000);
  }, []);

  return <div>{`Capital Time: ${time || '...loading'}`}</div>;
};

export default CapitalTime;
