import { WorldMap } from "react-svg-worldmap"
import { WordlMapData } from "../../models/CountryList.model";


type WorldMapBlockProps = {
  countries: WordlMapData[],
  onClickAction: Function,
}

export const WorldMapBlock = ({ countries, onClickAction }: WorldMapBlockProps) => {

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <WorldMap
        color="red"
        title="My custom World Map"
        value-suffix="people"
        size="xxl"
        data={countries}
        onClickFunction={onClickAction}
      />
    </div>
  );
}