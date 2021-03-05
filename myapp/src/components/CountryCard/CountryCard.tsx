import './CountryCard.scss';

type CountryCardProps = {
  country: string;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="countryCard">
      <h2>{country}</h2>
    </div>
  );
};

export default CountryCard;
