import React from 'react';
import GoogleMapReact from 'google-map-react';
import constants from '../utils/constants';

function Map({ layersImage, setBounds}) {
    const [loading, setLoading] = React.useState(false);
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
    setBounds(bounds);
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
        options={()=>({
            fullscreenControl: false    
        })}
        onZoomAnimationStart={()=> setLoading(true)}
        onZoomAnimationEnd  ={()=> setLoading(false)}
        >
            {layersImage && !loading &&
            <img src={layersImage} 
            style={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)'
            }}
            lat={screen.center.lat}
            lng={screen.center.lng}
            />}
    </GoogleMapReact>
  );
}

export default Map;
