import { StrictMode } from 'react';
import { render } from 'react-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Countries from './components/Countries/Countries';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const COUNTRIES = ['Russia', 'Belarus', 'Ukraine', 'Germany', 'Sweden', 'Finland', 'Denmark', 'Netherlands'];

render(
  <StrictMode>
    <Header />
    <Countries countries={COUNTRIES} />
    <Footer />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
