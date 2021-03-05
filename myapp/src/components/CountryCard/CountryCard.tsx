import './CountryCard.scss';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <h2>{country}</h2>
    </div>
  );
};

export default CountryCard;
