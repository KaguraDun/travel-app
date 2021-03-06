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
  return (
    <div className="country-page">
      <Header isMainPage={false} />
      <CountryInfo />
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
