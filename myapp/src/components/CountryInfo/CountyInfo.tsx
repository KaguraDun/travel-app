import React from 'react';
import './CountryInfo.scss';

type CountryInfoProps = {
  location: object;
};

class CountryInfo extends React.Component {
  constructor(props: CountryInfoProps) {
    super(props);
    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const language = 'ru';
    const country = this.props.location.pathname.slice(1);
    const url = `https://${language}.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${country}`;

    const res = await fetch(url);
    const countryData = await res.json();
    const countryDescription = Object.values(countryData.query.pages)[0].extract;

    this.setState({
      data: countryDescription,
    });
  }

  render() {
    return (
      <div className="country">
        <div className="country__photo">Photo</div>
        <div className="country__name">COUNTRY NAME</div>
        <div className="country__capital">COUNTRY CAPITAL</div>
        <div className="country__description" dangerouslySetInnerHTML={{ __html: this.state.data }} />
      </div>
    );
  }
}

export default CountryInfo;
