import Countries from '../Countries/Countries';
import Header from '../Header/Header';

type CountriesData = {
  name: string;
  capital: string;
};

type MainPageProps = {
  countries: CountriesData[];
};

const MainPage = ({ countries }: MainPageProps) => {
  return (
    <div>
      <Header isMainPage />
      <Countries countries={countries} />
    </div>
  );
};

export default MainPage;
