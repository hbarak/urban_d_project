export const types = {
    SET_LAYERS: "SET_LAYERS",
    GET_LAYERS_IMAGE: "GET_LAYERS_IMAGE",
    CHECK_LAYER_BY_ID: "CHECK_LAYER_BY_ID",
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

export const checkLayerById = (layerId) => {
    return {
        type: types.CHECK_LAYER_BY_ID,
        payload: layerId
    }
}