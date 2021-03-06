import { Component } from 'react';

import Countries from '../Countries/Countries';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
      <div>
        <Header />
        <Countries countries={COUNTRIES} />
        <Footer />
      </div>
    );
  }
}

export default TravelApp;
