import { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CountryService } from '../../services/http.service';
import { CountryList, Country } from '../../models/TravelApp.models';

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

class TravelApp extends Component<{}, CountryList> {
  constructor(props: {}) {
    super(props);

    this.state = {
      countriesList: [],
      countryOfTheDay: null,
    }

    this.getrandomCountry = this.getrandomCountry.bind(this);
  }

  componentDidMount() {
    CountryService.fetchAllCountries()
      .then(response => response.json())
      .then((countriesList: Country[]) =>
        this.setState({countriesList}, this.getrandomCountry));
  }

  getrandomCountry() {
    const randomIndex = Math.round(
      (this.state.countriesList.length - 1) * Math.random());
    this.setState({
      countryOfTheDay: this.state.countriesList[randomIndex]
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            component={() => 
              <MainPage
                countries={COUNTRIES}
                countriesList={this.state.countriesList}
                randomCountry={this.state.countryOfTheDay}
              />}
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
