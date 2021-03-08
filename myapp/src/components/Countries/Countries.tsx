import './Countries.scss';
import { Link } from 'react-router-dom';

import CountryCard from '../CountryCard/CountryCard';

type CountriesProps = {
  countries: string[];
};

const Countries = ({ countries }: CountriesProps) => {
  const countryArr = countries.map((country) => {
    const url = country.toLowerCase();
    return (
      <Link to={`/${url}`} key={country}>
        <CountryCard country={country} />
      </Link>
    );
  });

  return <div className="countries">{countryArr}</div>;
};

export default Countries;
