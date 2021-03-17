import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import { CountryService } from '../../services/http.service';

type VideoProps = {
  countryName: string;
};

const Video = ({ countryName }: VideoProps) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    CountryService.fetchAttractionVideo(countryName)
      .then((response) => response.json())
      .then((info) => setVideo(info));
  }, []);

  const youTubeUrl = 'https://www.youtube.com/watch?v=';
  const isVideoReceived = video && video.items;

  return <ReactPlayer controls url={isVideoReceived ? youTubeUrl + video.items[0].id.videoId : '...Loading'} />;
};

export default Video;
