import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({list}) => {
  return (
    <div>
      {list.map((item, index) => 
        <Tile item={item} key={index}/>
      )}
    </div>
  );
};
