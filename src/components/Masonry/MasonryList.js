import React, { useState } from "react";
import useMaxColumnHeight from "../../../utils/useMaxColumnHeight";
import useStyles from "./styles";

import { useParams } from "react-router-dom";

const rbhgMin = 100;
const rbhgMax = 400;

const randomBlockHeightGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// heightRestrictions - array with [minHeight, maxHeigth] to random gener
const getListOfItems = (
  numberOfItems,
  heightRestrictions = [rbhgMin, rbhgMax]
) =>
  Array.from({ length: numberOfItems }).map(() =>
    randomBlockHeightGenerator(...heightRestrictions)
  );

const MasonryList = ({ numberOfItems, blockOffsetInPercentWidth = 2 }) => {
  const classes = useStyles();
  const [listOfItems] = useState(getListOfItems(numberOfItems));

  const { numOfColumns } = useParams();

  const [maxColumnHeigth, blockOffset] = useMaxColumnHeight(
    listOfItems,
    blockOffsetInPercentWidth,
    numOfColumns || 3 // number or undefined (default value = 3)
  );

  console.log(maxColumnHeigth);

  return (
    <div
      className={classes.container}
      style={{
        height: `${maxColumnHeigth()}px`,
        // margin: `0 -12%`,
      }}
    >
      {listOfItems.map((item, index) => (
        <div
          key={index}
          className={classes.item}
          style={{
            height: `${item}px`,
            margin: `0 ${blockOffset() / 2}px ${blockOffset()}px`,
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default MasonryList;
