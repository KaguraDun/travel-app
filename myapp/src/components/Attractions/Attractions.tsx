import { useEffect, useState } from 'react';

import { CountryService } from '../../services/http.service';
import AttractionCard from '../AttractionCard/AttractionCard';

type AttractionsProps = {
  countryName: string;
  countryCapital: string;
};

const Attractions = ({ countryData }: any) => {
  const [capitalAttractions, setCapitalAttractions] = useState(null);
  const { alpha2Code, capital } = countryData;

  useEffect(() => {
    const searchRadius = 15000;
    CountryService.fetchCapitalCoordinates(alpha2Code, capital)
      .then((response) => response.json())
      .then((coordinates) =>
        CountryService.fetchCapitalAttractions(
          searchRadius,
          coordinates.lon,
          coordinates.lat
        )
          .then((response) => response.json())
          .then((attractions) => {
            setCapitalAttractions(attractions);
          })
      );
  }, []);

  let attractionsList = [];

  if (capitalAttractions) {
    attractionsList = capitalAttractions.map((attraction) => {
      return (
        <div key={attraction.xid}>
          <AttractionCard attraction={attraction} />
        </div>
      );
    });
  }

  return <div>{attractionsList}</div>;
};

export default Attractions;
