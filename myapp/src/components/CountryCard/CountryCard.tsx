import { Card } from 'react-bootstrap';

import { Country } from '../../models/CountryList.model';

import './CountryCard.scss';

type CountryCardProps = {
  item: Country;
};

const CountryCard = ({ item }: CountryCardProps) => {
  const { name, nativeName, capital, flag, currencies } = item;

  return (
    <div className="card">
      <Card>
        <Card.Img className="card__img" src={flag} variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{capital}</Card.Subtitle>
          <Card.Text>Native name: {nativeName}</Card.Text>
          {/* <Card.Text>
            {currencies.map((currency) => (
              <div>
                <div>Currency name: {currency.name}</div>
                <div>Currency symbol: {currency.symbol}</div>
              </div>
            ))}
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryCard;
