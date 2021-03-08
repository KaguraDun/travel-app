import { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CountriesData from '../../CountriesData/CountriesData.json';
import CountryPage from '../CountryPage/CountryPage';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';

class TravelApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            component={() => <MainPage countries={CountriesData.ru} />}
            exact
            path="/"
          />
          <Route component={CountryPage} exact path="/:country" />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default TravelApp;
