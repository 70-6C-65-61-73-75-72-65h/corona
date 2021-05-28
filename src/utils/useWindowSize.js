import React, { useState, useEffect } from "react";

// hook to get Window inner sizes
const useWindowSize = () => {
  const [size, setSize] = useState({
    x: document.body.clientWidth,
    y: document.body.clientHeight,
    // x: window.innerWidth,
    // y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: document.body.clientWidth,
      y: document.body.clientHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  return size;
};

export default useWindowSize;
