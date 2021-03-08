import './Countries.scss';
import { Link } from 'react-router-dom';

import CountryCard from '../CountryCard/CountryCard';

type CountriesData = {
  name: string;
  capital: string;
};

type CountriesProps = {
  countries: CountriesData[];
};

const Countries = ({ countries }: CountriesProps) => {
  const countryArr = countries.map((country) => {
    const url = country.name;
    return (
      <Link to={`/${url}`}>
        <CountryCard
          capital={country.capital}
          country={country.name}
          key={country.name}
        />
      </Link>
    );
  });

  return <div className="countries">{countryArr}</div>;
};

export default Countries;
