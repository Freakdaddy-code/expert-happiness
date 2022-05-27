import React, { useEffect, useState } from "react";

export default function Size() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div class="size">
        <div className="width">Your screen width is {windowWidth} pixels</div>
        <div className="height">
          Your screen height is {windowHeight} pixels
        </div>
      </div>
    </>
  );
}
