import JSITM from '../js-itm'

const pointToLanLon = ({x, y}) => {
    const s = `${x}${y}`;
    const latlon = JSITM.itmRef2gpsRef(s);
    const splittedLatLon = latlon.split(' ');
    return splittedLatLon;
}

export default {
    pointToLanLon,
}