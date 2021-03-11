import { useEffect, useState } from 'react';

import { CountryService } from '../../services/http.service';

import './AttractionCard.scss';

function sleeper(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const AttractionCard = ({ attraction }: any) => {
  const [attractionInfo, setAttractionInfo] = useState(null);

  useEffect(() => {
    CountryService.fetchAttractionInfo(attraction.xid)
      .then((response) => response.json())
      .then((info) => {
        setAttractionInfo(info);
        console.log(info);
      })
      .then(sleeper(500));
  }, []);

  return (
    <div className="attraction">
      <div className="attraction__info">
        <h2>{attraction.name}</h2>
        <h3>{attraction.kinds.split(',').join(', ')}</h3>
        <div className="attraction__text">
          {attractionInfo ? attractionInfo.wikipedia_extracts.text : null}
        </div>
      </div>

      <img
        className="attraction__image"
        src={attractionInfo ? attractionInfo.preview.source : null}
      />
    </div>
  );
};

export default AttractionCard;
