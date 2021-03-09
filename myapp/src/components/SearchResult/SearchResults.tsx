import { Country } from "../../models/CountryList.model";
import { Link } from 'react-router-dom';

type SearchResultsProps = {
  searchResult: Country[];
};

export const SearchResults = ({ searchResult }: SearchResultsProps) => {
  return (
    <ul>
      {searchResult.map((item: Country) =>
        <li key={item.name}>
          <Link to={`/${item.name.toLocaleLowerCase()}`}>
            {item.name}
          </Link>
        </li>)}
    </ul>
  );
};
