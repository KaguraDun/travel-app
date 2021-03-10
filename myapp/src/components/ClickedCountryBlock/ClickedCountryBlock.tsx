import { Country } from "../../models/CountryList.model";

type ClickedCountryBlockProps = {
  countryInfo: Country,
}
export const ClickedCountryBlock = ({ countryInfo }: ClickedCountryBlockProps) => {
  return (
    <div>
      {countryInfo.capital}
    </div>
  );
}