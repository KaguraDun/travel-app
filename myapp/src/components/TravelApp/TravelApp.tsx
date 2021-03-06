import { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CountryPage from '../CountryPage/CountryPage';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';

const COUNTRIES = [
  'Russia',
  'Belarus',
  'Ukraine',
  'Germany',
  'Sweden',
  'Finland',
  'Denmark',
  'Netherlands',
];

class TravelApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            component={() => <MainPage countries={COUNTRIES} />}
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
