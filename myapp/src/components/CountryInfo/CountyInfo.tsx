import { CountryDetail } from '../../models/CountryInfo.model'

type CountryInfoProps = {
  countryDetail: CountryDetail;
};

const CountryInfo = ({ countryDetail }: CountryInfoProps) => {
  return (
    <div className="country">
      <div className="country__photo">Photo</div>
      <div className="country__name">{countryDetail.title}</div>
      <div className="country__capital">COUNTRY CAPITAL</div>
      <div className="country__description">{countryDetail.extract}</div>
    </div>
  );
};

export default CountryInfo;
