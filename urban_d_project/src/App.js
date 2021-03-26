import React from 'react';
import { connect } from "react-redux";
import { setLayers, getLayersImage, checkLayerById } from './redux/actions'
import { getMapiLayers, getLayersMapiImage, createMapiLayerObject } from './utils/mapi';
import converter from './utils/converter';
import LayersMenu from './components/LayersMenu';
import Map from './components/Map'
import './App.css';

function App({layers, layersImage, getAllLayers, getLayersImage, checkLayerById}) {
  const [bounds, setBounds] = React.useState();
  
  React.useEffect(() => {
    getAllLayers();
  }, []);

  React.useEffect(()=>{
    if(layers.length > 0 && bounds){
      const {ne, nw, se, sw} = bounds;
      const topLeftPoint = converter.latLngToPoint(nw.lat, nw.lng);
      const bottomRightPoint = converter.latLngToPoint(se.lat, se.lng);
      getLayersImage(layers.filter(l => l.checked), topLeftPoint[0], bottomRightPoint[1], bottomRightPoint[0],topLeftPoint[1],window.innerWidth * 0.7,window.innerHeight);
    }
  },[layers, bounds])

  return (
    <div className="App" style={{display:'flex'}}>
      <div style={{ height: '100vh', width: '70%' }}>
        {layers.length > 0 && <Map
        setBounds={setBounds}
        layersImage={layersImage}
        />}
      </div>
      <div style={{ height: '100vh', width: '30%' }}>
          <LayersMenu
          layers={layers}
          checkLayer={checkLayerById}
          />
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
     layers: state.layers,
     layersImage: state.layersImage,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllLayers: () => {
      getMapiLayers()
      .then((newLayers) => {
        const newLayersLoaded = newLayers.map(layer => {
          layer.checked = false;
          return layer;
        });
        dispatch(setLayers(newLayersLoaded))
      })
    },
    getLayersImage: (layers, xmin, ymin, xmax, ymax, imageWidth, imageHeight) => {
      getLayersMapiImage({
        layers: layers.map(l => createMapiLayerObject(l.layerID, l.caption, l.minScale, l.maxScale)),
        box :{ xmin, ymin, xmax, ymax },
        size: { width: imageWidth, height: imageHeight },
      })
      .then((image) => {  
        const url = URL.createObjectURL( image );
        return url;
      })
      .then((image) => {
        dispatch(getLayersImage(image));
      })
    },
    checkLayerById: (layerId) => {
      dispatch(checkLayerById(layerId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
