import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
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
  const [ countryDetail, setCountryDetail ] = useState({} as CountryDetail);
  const location = useLocation();

  useEffect(() => {
    const countryName = location.pathname.split('/')[1];
    CountryService.fetchCountryInfoByName(countryName)
      .then(response => response.json())
      .then((countryInfo: CountryInfoResponse) =>
        setCountryDetail(Object.values(countryInfo.query.pages)[0]));
  }, []);

  return (
    <div className="country-page">
      {/* <Header isMainPage={false} /> */}
      <CountryInfo countryDetail={countryDetail} />
      <Attractions />
      <Video />
      <Map />
      <Weather />
      <CurrencyConverter />
      <CapitalTime />
    </div>
  );
};

export default CountryPage;
