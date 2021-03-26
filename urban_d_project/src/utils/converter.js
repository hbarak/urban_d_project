import JSITM from '../js-itm'

const pointToLatLng = ({x, y}) => {
    const s = `${x}${y}`;
    const latlon = JSITM.itmRef2gpsRef(s);
    const splittedLatLon = latlon.split(' ');
    return splittedLatLon;
}
const latLngToPoint = (lat, lon) => {
    const s = `${lat} ${lon}`;
    const point = JSITM.gpsRef2itmRef(s);
    const splittedPoint = point.split(' ');
    return splittedPoint;
}

export default {
    pointToLatLng,
    latLngToPoint
}