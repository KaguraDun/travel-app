import { FocusEvent } from 'react';
import './Search.scss';

type SearchProps = {
  searchHandler: Function;
  searchValue: string;
}

const Search: React.FC<SearchProps> = ({ searchHandler, searchValue }: SearchProps) => {
  const handleFocus = (e: FocusEvent<any>) => e.target.select();

  return (
    <input
      className="search"
      placeholder="Enter Country Name"
      value={searchValue}
      onChange={(e) => searchHandler(e.target.value)}
      onFocus={handleFocus}
    />
  );
};

export default Search;
