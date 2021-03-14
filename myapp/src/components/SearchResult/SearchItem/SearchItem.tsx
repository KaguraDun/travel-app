import { Country } from "../../../models/CountryList.model";

type SearchItemProps = {
  item: Country;
}

export const SearchItem = ({ item }: SearchItemProps) => {
  const { name, nativeName, capital, flag, currencies } = item;

  return (
    <li>
      <div>Name: {name}</div>
      <div>Native name: {nativeName}</div>
      <div>Capital: {capital}</div>
      <div>Flag: <img src={flag} width="100px"></img></div>
      {currencies.map(currency =>
        <div>
          <div>Currency name: {currency.name}</div>
          <div>Currency symbol: {currency.symbol}</div>
        </div>
      )}
      
    </li>
  );
};
