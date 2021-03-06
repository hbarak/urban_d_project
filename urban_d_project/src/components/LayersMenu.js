import React from 'react';

const MenuItem = ({layer, check}) => {
    return (
    <div style={{ backgroundColor: layer.checked ? 'lightblue' :'white', margin: '5px 20px', cursor: 'pointer', border: '1px solid', borderRadius: '5px' }}
    onClick={() => check(layer.layerID)}
    >{layer.caption}</div>
    );
};

export default ({layers, checkLayer}) => {
    return <div>
        {layers.map((layer, i) => 
        <MenuItem
        key={i}
        layer={layer}
        check={checkLayer}
        />)}
    </div>
}

