import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({ tile }) => {
  console.log(tile);

  return (
    <div>
      {tile.map((value, index) => {
        return <Tile key={index} tile={value} />
      })}
    </div>
  );
};
