export const types = {
    SET_MARKERS: "SET_MARKERS",
    SET_LAYERS: "SET_LAYERS",
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