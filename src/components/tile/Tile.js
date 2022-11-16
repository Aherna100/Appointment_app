import React from "react";

export const Tile = (items) => {
  const nArr = Object.values(items.item);
  return (
    <div className="tile-container">
      {
        nArr.map((item,index) => {
          return(
            <p key={index} className={`${index === 0 ? 'tile-title' : ''}tile`}>
              {item}
            </p>
          )
        })
      }
    </div>
  );
};
