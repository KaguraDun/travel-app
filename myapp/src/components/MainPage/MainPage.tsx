import { useState } from 'react';
import Countries from '../Countries/Countries';
import Header from '../Header/Header';
import { Country } from '../../models/CountryList.model';
import { RandomCountry } from '../RandomCountry/RandomCountry';
import { SearchResults } from '../SearchResult/SearchResults';

type MainPageProps = {
  countries: string[];
  countriesList: Country[];
  randomCountry: Country;
};

const MainPage = ({ countries, countriesList, randomCountry }: MainPageProps) => {
  const [ searchValue, setSearchValue ] = useState('');

  const searchHandler = (value: string) => setSearchValue(value);

  return (
    <div>
      <Header isMainPage searchHandler={searchHandler} />
      {searchValue
        ? <SearchResults
            searchResult={countriesList.filter((country: Country) =>
              country.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
              || country.capital.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))}/>
        : null
      }
      <RandomCountry randomCountry={randomCountry}/>
      <Countries countries={countries} />
    </div>
  );
};

export default MainPage;
