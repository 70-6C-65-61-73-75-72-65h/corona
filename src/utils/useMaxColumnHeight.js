import { useState, useCallback } from "react";
import useWindowSize from "./useWindowSize";

const getMaxColumnHeight = (blockList, blockOffset, numOfColumns) => {
  const columns = Array.from({ length: numOfColumns }).map((col) => 0); /// initial min height
  blockList.map((block, index) => {
    // debugger;
    let currColumnInd = index % numOfColumns;
    columns[currColumnInd] += block;
    if (index !== blockList.length) {
      columns[currColumnInd] += blockOffset;
    }
  });
  return Math.max(...columns);
};

const useMaxColumnHeight = (
  listOfItems,
  blockOffsetInPercentWidth,
  numOfColumns
) => {
  const { x: windowWidth } = useWindowSize();
  const blockOffset = useCallback(
    () => Math.ceil((windowWidth * blockOffsetInPercentWidth) / 100),
    [blockOffsetInPercentWidth, windowWidth]
  );
  const maxColumnHeigth = useCallback(
    () => getMaxColumnHeight(listOfItems, blockOffset(), numOfColumns),
    [numOfColumns, listOfItems, blockOffset]
  );
  return [maxColumnHeigth, blockOffset];
};

export default useMaxColumnHeight;
