export const types = {
    SET_MARKERS: "SET_MARKERS",
    SET_LAYERS: "SET_LAYERS",
    GET_LAYERS_IMAGE: "GET_LAYERS_IMAGE",
}

export const setMarkers = (markers) => {
    return {
        type: types.SET_MARKERS,
        payload: markers
    }
}

export const setLayers = (layers) => {
    return {
        type: types.SET_LAYERS,
        payload: layers
    }
}

export const getLayersImage = (layersImage) => {
    return {
        type: types.GET_LAYERS_IMAGE,
        payload: layersImage
    }
}