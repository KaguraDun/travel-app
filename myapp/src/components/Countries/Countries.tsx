import './Countries.scss';

import CountryCard from '../CountryCard/CountryCard';

type CountriesProps = {
  countries: string[];
};

const Countries = ({ countries }: CountriesProps) => {
  const countryArr = countries.map((country) => {
    return <CountryCard country={country} key={country} />;
  });

  return <div className="countries">{countryArr}</div>;
};

export default Countries;
