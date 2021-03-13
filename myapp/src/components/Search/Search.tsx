import './Search.scss';

type SearchProps = {
  searchHandler: Function;
  searchValue: string;
}

const Search: React.FC<SearchProps> = ({ searchHandler, searchValue }: SearchProps) => {
  return (
    <input
      className="search"
      placeholder="Enter Country Name"
      value={searchValue}
      onChange={(e) => searchHandler(e.target.value)}
    />
  );
};

export default Search;
