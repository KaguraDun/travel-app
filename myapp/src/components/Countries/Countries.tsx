import './Countries.scss';

import CountryCard from '../CountryCard/CountryCard';

const Countries = ({ countries }) => {
  let countryArr = countries.map((country) => {
    return <CountryCard key={country} country={country} />;
  });
  return <div className="countries">{countryArr}</div>;
};

export default Countries;
