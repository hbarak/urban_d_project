import React from 'react';
import { connect } from "react-redux";

const MenuItem = ({layer, check}) => {
    return (
    <div style={{ backgroundColor: layer.checked ? 'lightblue' :'white', margin: '5px 20px' }}
    onClick={() => check(layer.layerID)}
    >{layer.caption}</div>
    );
};

export default ({layers, checkLayer}) => {
    return <div>
        {layers.map((layer) => 
        <MenuItem
        layer={layer}
        check={checkLayer}
        />)}
    </div>
}

