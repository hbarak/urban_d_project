import React from 'react';
import GoogleMapReact from 'google-map-react';
import constants from '../utils/constants';

function Map({ layersImage, loadImage}) {
  const [screen, setScreen] = React.useState({
    center: {
      lat: 31.768318,
      lng: 35.213711
    },
    zoom: 11
  });

  const onMapChange = ({center, zoom , bounds, marginBounds} ) => {
    setScreen({
      center: {
        lat: center.lat,
        lng: center.lng,
      },
      zoom,
      bounds,
    })
    loadImage(bounds);
  }

  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: constants.googleApiKey }}
        defaultCenter={{
        lat: screen.center.lat,
        lng: screen.center.lng
        }}
        
        defaultZoom={screen.zoom}
        onChange={onMapChange}
        >
        {layersImage && <div
        style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
        }}
        lat={screen.center.lat}
        lng={screen.center.lng}
        >
            <img
            src={layersImage}
            /></div>}
    </GoogleMapReact>
  );
}

export default Map;
