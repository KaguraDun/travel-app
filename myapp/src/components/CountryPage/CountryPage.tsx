import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { CountryDetail, CountryInfoResponse } from '../../models/CountryInfo.model';
import { CountryService } from '../../services/http.service';
import Attractions from '../Attractions/Attractions';
import CapitalTime from '../CapitalTime/CapitalTime';
import CountryInfo from '../CountryInfo/CountyInfo';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Video from '../Video/Video';
import Weather from '../Weather/Weather';

import './CountryPage.scss';

const CountryPage = () => {
  const [countryDetail, setCountryDetail] = useState({} as CountryDetail);
  const [countryData, setCountryData] = useState(null);

  const location = useLocation();
  const countryName = location.pathname.split('/')[1];

  useEffect(() => {
    CountryService.fetchCountryInfoByName(countryName)
      .then((response) => response.json())
      .then((countryInfo: CountryInfoResponse) => setCountryDetail(Object.values(countryInfo.query.pages)[0]));

    CountryService.fetchCountry(countryName)
      .then((response) => response.json())
      .then((country) => setCountryData(country[0]));
  }, []);

  return (
    <div className="country-page">
      <Header isMainPage={false} />
      <CountryInfo countryDetail={countryDetail} />
      {countryData ? <Attractions countryData={countryData} /> : null}
      <Video countryName={countryName} />
      {countryData ? <Map countryData={countryData} /> : null}
      {countryData && <Weather capital={countryData.capital} />}
      <CurrencyConverter />
      {countryData ? <CapitalTime countryData={countryData} /> : null}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CountryPage;
