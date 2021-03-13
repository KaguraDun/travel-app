import { CountryDetail } from '../../models/CountryInfo.model'

type CountryInfoProps = {
  countryDetail: CountryDetail;
};

const CountryInfo = ({ countryDetail }: CountryInfoProps) => {
  const createMarkup = () => {
    return {__html: countryDetail.extract};
  };

  return (
    <div className="country">
      <div className="country__photo">Photo</div>
      <div className="country__name">{countryDetail.title}</div>
      <div className="country__capital">COUNTRY CAPITAL</div>
      <div className="country__description" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default CountryInfo;
