import { Country } from "../../models/TravelApp.models";

type SearchResultsProps = {
  searchResult: Country[];
};

export const SearchResults = ({ searchResult }: SearchResultsProps) => {
  return (
    <ul>
      {searchResult.map((item: Country) => <li>{item.name}</li>)}
    </ul>
  );
};
