import './Search.scss';

type SearchProps = {
  searchHandler: Function;
}

const Search: React.FC<SearchProps> = ({ searchHandler }: SearchProps) => {
  return <input className="search" placeholder="Enter Country Name" onChange={(e) => searchHandler(e.target.value)}/>;
};

export default Search;
