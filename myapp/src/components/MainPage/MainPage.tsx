import { useState } from 'react';
import Countries from '../Countries/Countries';
import Header from '../Header/Header';
import { Country } from '../../models/TravelApp.models';
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
      <SearchResults searchResult={countriesList.filter((country: Country) => country.name.includes(searchValue))}/>
      <RandomCountry randomCountry={randomCountry}/>
      <Countries countries={countries} />
    </div>
  );
};

export default MainPage;
