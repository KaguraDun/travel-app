import { Country } from '../../models/TravelApp.models';

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
