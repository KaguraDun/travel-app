import { Country } from '../../models/CountryList.model';

type RandomCountryProps = {
  randomCountry: Country;
};

export const RandomCountry = ({ randomCountry }: RandomCountryProps) => {
  return (
    <div>
      <div>Country of the day:</div>
      <div>{randomCountry && randomCountry.name}</div>
    </div>
  );
};
