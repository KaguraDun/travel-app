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
        title="Click on country to know more"
        value-suffix="people"
        size="xxl"
        data={countries}
        onClickFunction={onClickAction}
      />
    </div>
  );
}