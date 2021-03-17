import { WorldMap } from 'react-svg-worldmap';

import { WordlMapData } from '../../models/CountryList.model';

import './WorldMapBlock.scss';

type WorldMapBlockProps = {
  countries: WordlMapData[];
  onClickAction: Function;
};

export const WorldMapBlock = ({ countries, onClickAction }: WorldMapBlockProps) => {
  return (
    <div className="world-map" style={{display: "flex", justifyContent: "center"}}>
      <WorldMap
        color="red"
        data={countries}
        onClickFunction={onClickAction}
        size="xxl"
        title="Click on country to know more"
        value-suffix="people"
      />
    </div>
  );
};
