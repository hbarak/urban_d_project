import axios from 'axios';
import qs from 'qs';
import constants from './constants'

export const getMapiLayers = async () => {
    const response = await axios.post(constants.govmapLayersUrl ,{
        layers: null,
    })
    const { data: { data } } = response;
    return Object.values(data).reduce((layers, curr) => {
        const currLayers = Object.entries(curr.layers).map(([layerName, attributes]) => ({
            layerName,
            ...attributes
        }))
        layers.push(...currLayers)
        return layers;
    }, []);
}

export const getLayersMapiImage = async ({layers, box :{xmin, ymin, xmax, ymax}, size: {width, height}}) => {
    const response = await axios.get(constants.govmapImageUrl +
          '?http://govmap/arcgis/rest/services/AdditionalData/MapServer/export?dynamicLayers=' +encodeURIComponent(JSON.stringify(layers))
    ,{
        responseType: 'blob',
        headers:{
            accept:'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        },
        paramsSerializer: params => {
            return qs.stringify(params);
        },
        params:{
            dpi: 96,
            transparent: true,
            format: 'png32',
            layers: `show:${layers.map(l=>l.id).join(',')}`,
            bbox: `${xmin},${ymin},${xmax},${ymax}`,
            bboxSR: 2039,
            imageSR: 2039,
            size: `${width},${height}`,
            f: 'image',           
        },
    })
    return response.data;
}

export const createMapiLayerObject = (id, name, minScale, maxScale) => ({
    id,
    name,
    source:{
        type: 'mapLayer',
        mapLayerId: id,
    },
    minScale,
    maxScale,
})
