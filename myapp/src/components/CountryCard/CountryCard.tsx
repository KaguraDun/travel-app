import './CountryCard.scss';

type CountryCardProps = {
  country: string;
  capital: string;
};

const CountryCard = ({ country, capital }: CountryCardProps) => {
  return (
    <div className="countryCard">
      <h2>{country}</h2>
      <h3>{capital}</h3>
    </div>
  );
};

export default CountryCard;
