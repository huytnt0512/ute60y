import React, { useEffect, useState } from "react";
import "./Slider.scss";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((index) => (index % 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/ute${index + 1}.jpg`} />
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
