import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((item, index) => {
        return (
          <Tile
            key={index}
            item={item}
          >
          </Tile>
        )
      })
      }
    </div>
  );
};
