import { Country } from "../../models/CountryList.model";

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
      <div>Flag: <img src={flag}></img></div>
      <div>{currencies.map(currency => <div>Currency: {currency.name}{currency.symbol}</div>)}</div>
    </li>
  );
};
