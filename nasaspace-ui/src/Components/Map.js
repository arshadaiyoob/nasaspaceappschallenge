import React from 'react';
import Globe from 'worldwind-react-globe'
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";

const layers = [
    'coordinates',
    'view-controls',
    'stars',
    'atmosphere-day-night'
  ];
class Map extends React.Component {
    
    render() {
      return (
        <Globe
            layers={layers}
        />
      )
    }
  }

export default Map;