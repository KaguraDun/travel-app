import Countries from '../Countries/Countries';
import Header from '../Header/Header';

type MainPageProps = {
  countries: string[];
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
