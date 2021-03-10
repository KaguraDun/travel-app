import { useState } from 'react';
import Countries from '../Countries/Countries';
import Header from '../Header/Header';
import { Country } from '../../models/CountryList.model';
import { RandomCountry } from '../RandomCountry/RandomCountry';
import { SearchResults } from '../SearchResult/SearchResults';
import { WorldMapBlock } from '../WorldMapBlock/WorldMapBlock';
import { ClickedCountryBlock } from '../ClickedCountryBlock/ClickedCountryBlock';

type MainPageProps = {
  countries: string[];
  countriesList: Country[];
  randomCountry: Country;
};

const MainPage = ({ countries, countriesList, randomCountry }: MainPageProps) => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ countryClicked, setCountryClicked ] = useState(null);

  const searchHandler = (value: string) => setSearchValue(value);

  const searchResultCountries = countriesList.filter((country: Country) =>
    country.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    country.capital.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const worldMapData = countriesList.map((country: Country) => {
    return {
      country: country.alpha2Code,
      value: country.population,
    };
  });

  const onCountryClickHandler = (event: React.MouseEvent<SVGElement, Event>, countryName: string, isoCode: string, value: string, prefix?: string, suffix?: string) => {
    const clickedCountry = countriesList.find((country: Country) => country.alpha2Code.toLocaleLowerCase() === isoCode.toLocaleLowerCase());
    setCountryClicked(clickedCountry);
  };

  return (
    <div>
      <Header isMainPage searchHandler={searchHandler} />
      {searchValue
        ? <SearchResults
            searchResult={searchResultCountries}
          />
        : null
      }
      <RandomCountry randomCountry={randomCountry}/>
      {countryClicked
        ? <ClickedCountryBlock countryInfo={countryClicked} />
        : null
      }
      <WorldMapBlock
        countries={worldMapData}
        onClickAction={onCountryClickHandler}
      />
      <Countries countries={countries} />
    </div>
  );
};

export default MainPage;
