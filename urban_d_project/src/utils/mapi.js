const govmap = window.govmap;
const getDataByLayer = async (layerName, x, y, r) => {
    const response = await govmap.getLayerData({
        LayerName: layerName,
        Point: {x, y},
        Radius: r,
    }); 
    const {errorCode, status, message, data} = response;

    const ret = data.reduce((prev, { Fields, distance }) => {
        const fields = Fields.reduce((p, { FieldName, Value })=>{
            p[FieldName] = Value;
            return p;
        }, {})
        prev.push({
            fields,
            distance
        })
        return prev;
    }, []);
    return ret;
}

export default {
    getDataByLayer
}