import { Country } from "../../models/TravelApp.models";
import { Link } from 'react-router-dom';

type SearchResultsProps = {
  searchResult: Country[];
};

export const SearchResults = ({ searchResult }: SearchResultsProps) => {
  return (
    <ul>
      {searchResult.map((item: Country) =>
        <li>
          <Link to={`/${item.name.toLocaleLowerCase()}`}>
            {item.name}
          </Link>
        </li>)}
    </ul>
  );
};
